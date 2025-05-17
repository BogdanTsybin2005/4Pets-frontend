import './style.scss';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';
import axios from 'axios';
import Header from '../../authComponents/header';
import map4PetsLabel from '../../svg_pictures/icons/4pets-map-label-1.png';
import mapData from './mapData';
import { calculateMeanVeterinaryClinicsLatAndLon } from './mapData';



export default function Map() {

    const allClinicsLatAndLonMean = calculateMeanVeterinaryClinicsLatAndLon('клиники');
    const allPetStoresLatAndLonMean = calculateMeanVeterinaryClinicsLatAndLon('зоомагазины');

    useEffect(() => {
      const map = L.map(
        'map-container', 
        { 
          attributionControl: false,
          zoomControl: false 
      }).setView(
        [
          (allClinicsLatAndLonMean[0] + allPetStoresLatAndLonMean[0]) / 2, 
          (allClinicsLatAndLonMean[1] + allPetStoresLatAndLonMean[1]) / 2
        ], 
        14
      );



      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {
          attribution: '&copy; OpenStreetMap contributors',
        }
      ).addTo(map);


      const displayAllLabelsInMap = (data, text) => {
        for (let i = 0; i < data.length; i++) {
          const customIcon = L.icon({
            iconUrl: map4PetsLabel,
            iconSize: [50, 60],               
            iconAnchor: [25, 45],             
            popupAnchor: [0, -40] 
          });

          const marker = L.marker([data[i].lat, data[i].lon], {
            icon: customIcon
          }).addTo(map);

          marker.bindTooltip(`${text}: ${data[i].text}`, {
            permanent: false,
            direction: 'top',
            offset: [0, -40],
            className: 'custom-tooltip'
          });

        }
      }

      displayAllLabelsInMap(mapData.veterinaryClinics, 'Ветклиника');
      displayAllLabelsInMap(mapData.petStore, 'Зоомагагин');



      const customZoom = L.Control.extend({
        onAdd: function () {
          const container = L.DomUtil.create('div', 'custom-zoom');
          const zoomIn = L.DomUtil.create('button', 'zoom-btn zoom-in', container);
          zoomIn.innerHTML = '+';
          zoomIn.onclick = () => map.zoomIn();

          const zoomOut = L.DomUtil.create('button', 'zoom-btn zoom-out', container);
          zoomOut.innerHTML = '-';
          zoomOut.onclick = () => map.zoomOut();

          return container;
        }
      });
      map.addControl(new customZoom({ position: 'bottomright' }));



      
      axios.post('https://overpass-api.de/api/interpreter', `
          [out:json];
          relation(8493930);
          out geom;
      `, {
          headers: {
              'Content-Type': 'text/plain'
          }
      })
      .then(response => {
          const data = response.data;
          if (!data || !data.elements || data.elements.length === 0) return;
      })
      .catch(error => {
          console.error('Ошибка при получении границ Бишкека:', error);
      });



      return () => map.remove();
    }, []);

    return (
        <div className="map-page">
            <Header />
            <div className="map-container" id="map-container" />
        </div>
    );
}

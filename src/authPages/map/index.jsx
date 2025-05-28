import './style.scss';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import axios from 'axios';
import Header from '../../authComponents/header';
import map4PetsLabel from '../../svg_pictures/icons/4pets-map-label-1.png';
import mapData from './mapData';
import { useLanguageContext } from '../../context/LanguageContext';



export default function Map() {
  const [mapType, setMapType] = useState('all');
  const mapRef = useRef(null);
  const layerGroupRef = useRef(null);
  const {interfaceLanguage, allMyLanguageData} = useLanguageContext();
  

  useEffect(() => {
    const map = L.map('map-container', {
      attributionControl: false,
      zoomControl: false
    }).setView([42.8746, 74.6122], 14);

    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

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

    map.locate({ setView: true, maxZoom: 16 });
    map.on('locationfound', (e) => {
      L.circle(e.latlng, {
        radius: e.accuracy,
        color: '#D5007F',
        fillColor: '#D5007F55',
        fillOpacity: 0.4
      }).addTo(map);
    });

    axios.post('https://overpass-api.de/api/interpreter', `
      [out:json];
      relation(8493930);
      out geom;
    `, {
      headers: { 'Content-Type': 'text/plain' }
    }).catch(error => {
      console.error('Ошибка при получении границ города:', error);
    });

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    if (layerGroupRef.current) {
      layerGroupRef.current.clearLayers();
      map.removeLayer(layerGroupRef.current);
    }

    const group = L.layerGroup();
    layerGroupRef.current = group;

    const data = {
      clinics: mapData.veterinaryClinics,
      petstores: mapData.petStore,
      all: [...mapData.veterinaryClinics, ...mapData.petStore]
    }[mapType];

    const bounds = [];

    data.forEach(point => {
      const icon = L.icon({
        iconUrl: map4PetsLabel,
        iconSize: [50, 60],
        iconAnchor: [25, 45],
        popupAnchor: [0, -40]
      });

      const marker = L.marker([point.lat, point.lon], { icon });
      marker.bindPopup(`<b>${point.text}</b>`);
      group.addLayer(marker);
      bounds.push([point.lat, point.lon]);
    });

    map.addLayer(group);

    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 });
    }
  }, [mapType]);

  return (
    <div className="map-page">
      <Header />
      <div className="map-container" id="map-container">
        <div className="filter-panel">
          <button onClick={() => setMapType('clinics')}>{allMyLanguageData[interfaceLanguage]?.map.veterinaryClinics}</button>
          <button onClick={() => setMapType('petstores')}>{allMyLanguageData[interfaceLanguage]?.map.petStores}</button>
          <button onClick={() => setMapType('all')}>{allMyLanguageData[interfaceLanguage]?.map.allCategories}</button>
        </div>
      </div>
    </div>
  );
}

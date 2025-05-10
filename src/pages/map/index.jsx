import Header from "../../components/header"
import Footer from "../../components/footer"
import { load } from "@2gis/mapgl"
import { useEffect } from "react"



export default function Map() {

    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
          map = new mapglAPI.Map('map-container', {
            center: [55.31878, 25.23584], 
            zoom: 13,
            key: 'ВАШ_API_КЛЮЧ',
          });
        });
    
        return () => map && map.destroy();
      }, []);

    return (
        <>
            <Header/>
            <div id="map-container" style={{ width: '100%', height: '400px' }} />;
            <Footer/>
        </>
    )
}

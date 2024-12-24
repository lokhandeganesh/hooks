import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css'
import { useState } from 'react';

const INITIAL_CENTER = [77, 18.95];
const INITIAL_ZOOM = 7;
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;


function App() {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      // View animation
      center: center,
      zoom: zoom,
    });

    mapRef.current.on('move', () => {
      // get the current center coordinates and zoom level from the map
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();

      // update state
      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    })

    return () => {
      mapRef.current.remove()
    };
  }, [])

  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
      // duration: 2
    })
  }

  return (
    <>
      <div className="sidebar">
        Long:{center[0].toFixed(4)} | Lat:{center[1].toFixed(4)}
      </div>
      <button className='reset-button' onClick={handleButtonClick}>Reset</button>
      <div id='map-container' ref={mapContainerRef}></div>
    </>
  )
}

export default App

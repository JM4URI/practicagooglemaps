import { Routes, Route} from 'react-router-dom';
import './App.css'
import Mapa from './components/Mapa'
import MapaConClusters from './components/MapaConClusters';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import MapLoader from './components/MapLoader';
import { useJsApiLoader } from "@react-google-maps/api";

function App() {

  const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mapa" element={<MapLoader><Mapa /></MapLoader>} />
            <Route path="/mapaClusters" element={<MapLoader><MapaConClusters /></MapLoader>} />
        </Routes>
    </>
  )
}

export default App

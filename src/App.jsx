import { Routes, Route} from 'react-router-dom';
import './App.css'
import Mapa from './components/Mapa'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mapa" element={<Mapa />} />
        </Routes>
    </>
  )
}

export default App

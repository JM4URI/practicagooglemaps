import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/mapa">Mapa</Link>
        <Link to="/mapaClusters">Mapa con Clusters</Link>
        <Link to="/mapaDrawing">Mapa con Drawing</Link>
      </nav>
    </>
  );
}

export default Navbar;

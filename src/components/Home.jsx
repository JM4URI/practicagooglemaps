import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
        <div>
            <h1>Bienvenido a la Actividad 11</h1>
            <p>
                <strong>Objetivo de la actividad:</strong><br />
                Integrar la api de google maps a la actividad 10
            </p>
            <button onClick={() => navigate('/about')}>Acerca de </button>
            <button onClick={() => navigate('/contact')}>Contacto</button>
            <button onClick={() => navigate('/mapa')}>Ir al Mapa</button>
            <button onClick={() => navigate('/mapaClusters')}>Ir al Mapa con Clusters</button>
            <button onClick={() => navigate('/mapaDrawing')}>Ir al Mapa con Drawing</button>
        </div>
    </>
  );
}

export default Home;

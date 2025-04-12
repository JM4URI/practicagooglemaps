import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

    return (
        <>
            <h2>Facultad de Informatica Mazatlán</h2>
            <h2>Activdad 10 - Implementando React Route</h2>
            <button onClick={() => navigate('/')}>Volver al inicio</button>
        </>
    );
  }

  export default About;
  
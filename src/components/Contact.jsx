import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

    return (
        <>
            <p>
                <strong>Alumno:</strong> Jesús Mauricio Rocha Angulo<br />
                <strong>Correo:</strong> jmauriciorocha13@gmail.com
            </p>
            <button onClick={() => navigate('/')}>Volver al inicio</button>
        </>
    );
  }

  export default Contact;
  
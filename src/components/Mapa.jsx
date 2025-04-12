import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 23.231541418530608,
  lng: -106.42652947574959,
};

function Mapa() {
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
            <Marker position={center} onClick={() => setSelected(center)} />
            {selected && (
                <InfoWindow position={selected} onCloseClick={() => setSelected(null)}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '10px',
                        borderRadius: '8px',
                        color: 'black',
                        fontSize: '16px',
                        maxWidth: '200px'
                        }}>
                        <h2>UAS</h2>
                        <p style={{ margin: 0 }}>Facultad de Informática Mazatlán</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    </LoadScript>
  );
}

export default Mapa;

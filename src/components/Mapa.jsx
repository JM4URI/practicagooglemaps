import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const origen = {
  lat: 23.231541418530608,
  lng: -106.42652947574959,
};

const destino = {
  lat: 23.198333582642356, 
  lng: -106.42317927806837,
};

const Mapa = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'API',
    libraries: ['places']
  });

  const [directions, setDirections] = useState(null);

  const directionsCallback = ( response ) => {
    if(response !== null) {
      if(response.status === 'OK') {
        setDirections(response);
      } else {
        console.error('Error al obtener direcciones:', response);
      }
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={origen}
      zoom={10}
    >
      {/* Mostrar la ruta */}
      <DirectionsService
        options={{
          destination: destino,
          origin: origen, 
          travelMode: 'WALKING'
        }}
        callback={directionsCallback}
      />

      {directions && (
        <DirectionsRenderer
          options={{
            directions: directions,
          }}
        />
      )}

      {/* Mostar marcadores */}
      <Marker position={origen} label="UAS" />
      <Marker position={destino} label="Machado" />

    </GoogleMap>
  ) : (
    <div>Cargando mapa...</div>
  );
};

export default Mapa;

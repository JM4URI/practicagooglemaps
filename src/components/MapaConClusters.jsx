import React, { useState } from "react";
import { GoogleMap, MarkerF, MarkerClustererF, InfoWindowF } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "500px",
};

const center = {
    lat: 23.2494,
    lng: -106.4111, // Centro de Mazatlán
};

const generateMarkers = () => {
    const markers = [];
    for (let i = 0; i < 100; i++) {
        markers.push({
            lat: center.lat + (Math.random() - 0.1) * 0.05,
            lng: center.lng + (Math.random() - 0.1) * 0.05,
            id: i,
            info: `Marcador #${i + 1}`,
        });
    }
    return markers;
};

const MapaConClusters = () => {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const markers = generateMarkers();

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
        >
            <MarkerClustererF>
                {(clusterer) =>
                    markers.map((marker) => (
                        <MarkerF
                            key={marker.id}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            clusterer={clusterer}
                            onClick={() => setSelectedMarker(marker)}
                        />
                    ))
                }
            </MarkerClustererF>

            {selectedMarker && (
                <InfoWindowF
                    position={{
                        lat: selectedMarker.lat,
                        lng: selectedMarker.lng,
                    }}
                    onCloseClick={() => setSelectedMarker(null)}
                >
                    <div style={{ color: "#000", backgroundColor: "#fff" }}>
                        <h4>{selectedMarker.info}</h4>
                        <p>Coordenadas:</p>
                        <p>Lat: {selectedMarker.lat.toFixed(5)}</p>
                        <p>Lng: {selectedMarker.lng.toFixed(5)}</p>
                    </div>
                </InfoWindowF>
            )}
        </GoogleMap>
    );
};

export default MapaConClusters;

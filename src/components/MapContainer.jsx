import React, { useState, useCallback } from "react";
import { GoogleMap, DrawingManager } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "600px",
};

const center = {
    lat: 23.2494,
    lng: -106.4111, // Centro de Mazatlán
};

const MapContainer = () => {
    const [shapes, setShapes] = useState([]);
    const addShape = useCallback((shape, type) => {

        let pathCoords = [];
        if (type === "polygon" || type === "polyline") {
            pathCoords = shape.getPath().getArray().map((coord) => ({ lat: coord.lat(), lng: coord.lng() }));
        } else if (type === "rectangle") {
            const bounds = shape.getBounds();
            const ne = bounds.getNorthEast();
            const sw = bounds.getSouthWest();
            pathCoords = [
                { lat: ne.lat(), lng: ne.lng() },
                { lat: ne.lat(), lng: sw.lng() },
                { lat: sw.lat(), lng: sw.lng() },
                { lat: sw.lat(), lng: ne.lng() }
            ];
        }

        setShapes((prev) => [
            ...prev,
            { id: Date.now(), coords: pathCoords, shape }
        ]);
    }, []);

    const removeShape = (id) => {
        setShapes((prev) => {
            const shapeToRemove = prev.find((s) => s.id === id);
            if (shapeToRemove) {
                shapeToRemove.shape.setMap(null);
            }
            return prev.filter((s) => s.id !== id);
        });
    };

    return (
        <div style={{ display: "flex" }}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
                <DrawingManager
                    options={{
                        drawingControl: true,
                        drawingControlOptions: {
                            position: window.google.maps.ControlPosition.TOP_CENTER,
                            drawingModes: ["polygon", "rectangle", "polyline"],
                        }
                    }}
                    onPolygonComplete={(polygon) => addShape(polygon, "polygon")}
                    onRectangleComplete={(rectangle) => addShape(rectangle, "rectangle")}
                    onPolylineComplete={(polyline) => addShape(polyline, "polyline")}
                />
            </GoogleMap>

            <div style={{ width: "300px", height: "auto", overflowY: "auto", marginLeft: "5px"}}>
                <h3>Dibujos</h3>
                {shapes.map(({ id, type, coords }) => (
                    <div key={id} style={{ borderBottom: "1px solid #ffffff" }} >
                        <strong>Coordenadas:</strong>
                        <ul style={{ maxHeight: "150px", overflowY: "auto" }}>
                            {coords.map((coord, i) => (
                                <li key={i}>
                                    Lat: {coord.lat.toFixed(6)}, Lng: {coord.lng.toFixed(6)}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => removeShape(id)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MapContainer;

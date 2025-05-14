import { useJsApiLoader } from "@react-google-maps/api";

const MapLoader = ({ children }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

    if (loadError) return <p>Error al cargar el mapa</p>;
    if (!isLoaded) return <p>Cargando mapa...</p>;

    return <>{children}</>;
};

export default MapLoader;

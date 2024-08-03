import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import marker from "assets/svg/marker.svg";
import { theme } from "./model/theme";
import { Contacts } from "./contacts/Contacts";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 48.864716,
  lng: 2.349014,
};

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const options = {
    styles: theme,
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex h-[500px] sm:h-screen relative flex-col" id="map">
      <Contacts />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={options}
      >
        <Marker position={center} icon={marker} />
      </GoogleMap>
    </div>
  );
};

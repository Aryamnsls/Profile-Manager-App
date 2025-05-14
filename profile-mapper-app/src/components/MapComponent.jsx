// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

// const containerStyle = {
//   width: '100%',
//   height: '300px',
// }

// const center = {
//   lat: 28.6139,
//   lng: 77.209,
// }

// export default function GoogleMapComponent({ coordinates }) {
//   const position = coordinates || center

//   return (
//     <div className="mt-4 rounded-lg border shadow-md">
//       const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'AIzaSyC8OLTTLkRfvtmBMCywUblnu4kPesZQEk4';
//       <LoadScript googleMapsApiKey={apiKey}>
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={position}
//           zoom={12}
//         >
//           <Marker position={position} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   )
// }


// components/MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import leaflet styles

const MapComponent = ({ lat, lng, address }) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ width: '100%', height: '300px', borderRadius: '8px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={new L.Icon.Default()}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

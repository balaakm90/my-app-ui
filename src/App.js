import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function App() {
  const position = [13.095676, 77.578387]
  return (
    <div className="App">
      <div>
        <MapContainer className="map" center={position} zoom={18} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={position}>
            <Popup>
              AARADHYA
            </Popup>
          </Marker> */}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;

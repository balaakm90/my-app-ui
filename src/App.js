import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
// import './leaflet/leaflet.css'
import 'leaflet/dist/leaflet.css'

function App() {
  const position = [13.095676, 77.578387]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <MapContainer className="map" center={position} zoom={20} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              AARADHYA
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;

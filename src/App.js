import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import RoutingMachine from './Components/LeafletRouting'
function App() {
  const [location] = useState({
    default: {
      name: 'Default',
      latlong: [33.52001088075479, 36.26829385757446]
    },
    bangalore: {
      name: 'Aaradhya',
      latlong: [13.095676, 77.578387]
    },
    arakkonam: {
      name: 'Home',
      latlong: [13.088292, 79.668755]
    },
    quatres: {
      name: 'Defense Quatres',
      latlong: [13.0399008, 79.6750332]
    }
  });
  const [latLongRoute, setLatLongRoute] = useState({
    start: {
      lat: 13.088292,
      long: 79.668755
    },
    end: {
      lat: 13.0399008,
      long: 79.6750332
    }
  });
  const routePointsObj = {
    routePoints: [
      {
        name: 'Arakkonam House',
        lat: 13.088292,
        lng: 79.668755
      },
      {
        name: 'New Bus Stand',
        lat: 13.084799,
        lng: 79.660698
      },
      {
        name: 'Devi Theatre',
        lat: 13.078672,
        lng: 79.673279
      },
      {
        name: 'Defense Quatres',
        lat: 13.0399008,
        lng: 79.6750332
      },
      {
        name: 'Bangalore House',
        lat: 13.095676,
        lng: 77.578387
      }
    ]
  };
  return (
    <div className="App">
      <div>
        <MapContainer className="map" center={location.arakkonam.latlong} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <TileLayer url="https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/256/{z}/{x}/{y}.png?key=gR2UbhjBpXWL68Dc4a3f" /> */}
          {/* <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
          /> */}
          {/* <Marker position={location.arakkonam.latlong}>
            <Popup>
              {location.arakkonam.name}
            </Popup>
          </Marker> */}
          <RoutingMachine routePoints={routePointsObj} />
        </MapContainer>
      </div>
      <div className="map-controls">
        <input type="text" placeholder="Choose start" />
        <input type="text" placeholder="Choose end" />
      </div>
    </div>
  );
}

export default App;

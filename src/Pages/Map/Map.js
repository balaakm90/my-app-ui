import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect, useRef } from 'react';
import RoutingMachine from './Components/MapRouting'
import './Map.css'
import markerIconPng from "leaflet/dist/images/marker-icon-2x.png"
import { Icon } from 'leaflet'
import { Search } from './Components/Search';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { RecenterMap } from './Components/RecenterMap';

export function Map() {
    const [currentLocation, setCurrentLocation] = useState([0, 0]);
    const [mapZoom, setMapZoom] = useState(18);
    const [routePoints, setRoutePoints] = useState(null);
    const [showDirectionControl, setShowDirectionControl] = useState(false);
    const txtSearch = useRef();

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
        }
    }

    function successFunction(position) {
        setCurrentLocation([position.coords.latitude, position.coords.longitude]);
    }

    function errorFunction(error) {
        alert(error);
    }

    const setStateValues = (props) => {
        //setCurrentLocation([13.088292, 79.668755]);
        setRoutePoints({
            routePoints: [
                {
                    name: 'Arakkonam House',
                    lat: 13.088292,
                    lng: 79.668755
                },
                {
                    name: 'Bangalore House',
                    lat: 13.095676,
                    lng: 77.578387
                }
            ]
        });
        setRoutePoints(null);
        setShowDirectionControl(false);
    };
    const handleSearchSubmit = (props) => {
    };
    const handleGetCurrentLoc = (props) => {
        getLocation();
        setMapZoom(14);
    };


    useEffect(() => {
        getLocation();
    }, []);
    return (
        <div className='map-page'>
            <div className='map-page-left page-containers'>
                {
                    (showDirectionControl) ? (
                        <div className="map-controls-startend">
                            <input type="text" className="control-textbox" placeholder="Choose starting point" />
                            <input type="text" className="control-textbox" placeholder="Choose ending point" />
                            <input type="submit" className="submit-map-controls" value="Get Direction" />
                        </div>
                    ) : (

                        <>
                            <div className="map-controls-search">
                                <input type="text" className="search-textbox" placeholder="Search..." />
                                <input onClick={() => { return handleSearchSubmit(); }} type="submit" className="search-submit" value="Search" />

                                {/* <input type="text" placeholder="Search.." name="search" />
                            <button onClick={() => { return handleSearchSubmit(); }} type="submit"><i class="fa fa-search"></i></button> */}
                            </div>
                            <input onClick={() => { return handleGetCurrentLoc(); }} type="submit" className="btn-curloc" value="Get Current Location" />
                        </>
                    )
                }
            </div>
            <div className='map-page-right page-containers'>
                {
                    (currentLocation != null) ? (
                        <div className='map-container'>
                            <MapContainer className="map" center={currentLocation} zoom={mapZoom} scrollWheelZoom={true}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={currentLocation} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                                    <Popup>
                                        Test
                                    </Popup>
                                </Marker>
                                {
                                    (routePoints != null) ? (<RoutingMachine routePoints={routePoints} />) : ('')
                                }
                                <Search provider={new OpenStreetMapProvider()} />
                                <RecenterMap lat={currentLocation[0]} lng={currentLocation[1]} />
                            </MapContainer>
                        </div>
                    ) : ('')
                }
            </div>
        </div>
    );
}
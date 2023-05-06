import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'

const createRoutineMachineLayer = (props) => {
    let routePoints = [];
    props.routePoints.routePoints.map(x => {
        routePoints.push(
            L.latLng(x.lat, x.lng)
        );
    });
    const myIcon = L.icon({
        iconUrl: 'myIcon.png',
    });
    const instance = L.Routing.control({
        waypoints: routePoints,
        lineOptions: {
            styles: [{ color: "#00ff00", opacity: 0.8, weight: 5 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: true
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
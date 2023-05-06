import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
    let routePoints = [];
    props.routePoints.routePoints.map(x => {
        routePoints.push(
            L.latLng(x.lat, x.lng)
        );
    });
    const instance = L.Routing.control({
        waypoints: routePoints,
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 10 }]
        },
        show: false,
        addWaypoints: true,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
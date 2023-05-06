import { useMap } from 'react-leaflet'
import { GeoSearchControl } from 'leaflet-geosearch'
import { useEffect } from 'react'

export const Search = (props) => {
    const map = useMap();
    const { provider } = props;

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
        });
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, [props]);
    return null;
}
import GoogleMapReact from "google-map-react";
import LocationMarker from './LocationMarker';

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({

    root: {
        width: '60vw',
        height: '50vh'
    },
});
const GoogleMapComponent = (props) => {

    const classes = useStyles();

    //markerの設定時に使用
    // const eventData = [
    //     {
    //         lat: props.location.markerLat,
    //         lng: props.location.markerLng
    //     }
    // ];
    // const markers = eventData.map((ev, index) => {
    //     return <LocationMarker key={index.toString()} lat={ev.markerLat} lng={ev.markerLng} id={'myMap'} />
    // })

    const defaultProps = {
        center: {
            lat: props.location.lat,
            lng: props.location.lng
        },
        zoom: 12
    }


    const handleApiLoaded = ({ map, maps }) => {
        new maps.Marker({
            map,
            position: defaultProps.center,
        });
    };

    return (

        <div className={classes.root}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "API-key" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={handleApiLoaded}
            >
                {/* {markers} */}
            </GoogleMapReact>
        </div>

    )
}

export default GoogleMapComponent

import GoogleMapReact from "google-map-react";
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

import { useState, useCallback } from 'react';

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({

    root: {
        width: '80vw',
        maxWidth: "1000px",
        height: '60vh'
    },
});
const GoogleMapComponent = (props) => {

    const classes = useStyles();
    const [markerArray, setMarkerArray] = useState(null);
    const [open, setOpen] = useState(false);
    const apiKEY = process.env.REACT_APP_GOOGLEKEY;
    const markerData = [
        {
            placeName: props.location.placeName,
            lat: props.location.lat,
            lng: props.location.lng,
            title: props.location.title,
            intoroduction: props.location.intoroduction,
            url: props.location.url
        }
    ]
    const center = {
        lat: props.location.lat,
        lng: props.location.lng
    }

    const handleOpen = useCallback((ev) => {
        setMarkerArray(ev)
        setOpen(true)
    }, [setOpen]);

    // 問い合わせフォーム用モーダルを閉じるCallback関数
    const handleClose = useCallback(() => {
        setOpen(false)
    }, [setOpen]);

    return (

        <div className={classes.root}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKEY }}
                defaultCenter={center}
                defaultZoom={17}
            >
                {open && <LocationInfoBox info={markerArray} handleClose={handleClose} />}
                {markerData.map((ev, index) => {
                    return <LocationMarker text={ev.text} lat={ev.lat} lng={ev.lng} key={index.toString()} onClick={() => { handleOpen(ev) }} />
                })}
            </GoogleMapReact>
        </div>

    )
}

export default GoogleMapComponent

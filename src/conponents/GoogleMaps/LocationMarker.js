import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = (props) => {
    return (
        <div id={props.id} lat={props.lat} lng={props.lng}>
            <Icon icon={locationIcon} color="red" />
        </div>
    )
}

export default LocationMarker

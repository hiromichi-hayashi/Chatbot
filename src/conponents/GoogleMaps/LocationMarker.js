import { makeStyles } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


const useStyles = makeStyles({

    size: {
        fontSize: '2rem',
        color: 'black'
    },
    text: {
        fontWeight: 'bold',
        backgroundColor: '#fff',
        color: 'black',
        display: 'block'
    },
});


const LocationMarker = ({ lat, lng, text, onClick }) => {
    const classes = useStyles()
    return (
        <div >
            <Tooltip title="私のオススメ" placement="top">
                <EmojiPeopleIcon onClick={onClick} className={classes.size} />
            </Tooltip>
        </div>
    )
}

export default LocationMarker

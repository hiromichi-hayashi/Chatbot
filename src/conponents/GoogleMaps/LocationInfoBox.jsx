import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    locationInfo: {
        color: "#fff"
    },
    root: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "10px",
        position: "absolute",
        right: '74%',
        top: '-28%',

        width: '55vw',
        padding: "1%",
        height: "45vh"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    pos: {
        marginBottom: "3%",
    },
});

const LocationInfoBox = ({ info, handleClose }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root} variant="outlined" onClick={handleClose}>
            <CardContent>
                <Typography className={classes.title} >
                    {info.title}
                </Typography>
                <p className={classes.pos} color="textSecondary">
                    {info.placeName}
                    {info.intoroduction}
                </p>

                <Button
                    variant="outlined"
                    color="primary"
                    rel="noopener"
                    target="_blank"
                    href={info.url}
                >
                    googleマップで開く
            </Button>
            </CardContent>
        </Card>
    )
}

export default LocationInfoBox
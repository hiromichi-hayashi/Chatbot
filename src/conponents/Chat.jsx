import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import answerIcon from '../assets/img/answerIcon.png';
import userIcon from '../assets/img/userIcon.png';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapComponent from './GoogleMaps/GoogleMapComponent';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: '36ch',
    },
    inline: {
        display: 'inline',
    },
    Chat__bubble: {
        background: "#41B6E6",
        borderRadius: "15px",
        color: "#fff",
        margin: "auto 0.1rem",
        fontSize: "18px",
        fontWeight: 500,
        padding: "0.8rem",
        maxWidth: "90%",
        width: "auto",
    },
    chat__row: {
        display: "flex",
        flexDirection: "row",
        padding: '10px 0'
    },
    chat__reverse: {
        display: "flex",
        flexDirection: "row-reverse",
    }

});

const Chat = (props) => {
    const isQuestion = (props.type === 'answer');
    const classes = useStyles()
    const chatstyles = isQuestion ? classes.chat__reverse : classes.chat__row;
    return (
        <div className={chatstyles} >
            <div>
                {isQuestion ? (
                    <Avatar alt="icon" src={userIcon} justifycontent="flex-start"
                    />
                ) : (
                    <Avatar alt="icon" src={answerIcon} justifycontent="flex-end"
                    />
                )}
            </div>

            <div
                className={classes.Chat__bubble}
            >
                {props.text}
                {props.location && (
                    <GoogleMapComponent location={props.location} id={'myMap'} />
                )}
            </div>
        </div>
    )
}

export default Chat
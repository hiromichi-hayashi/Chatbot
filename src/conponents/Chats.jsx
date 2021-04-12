import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Chat } from './index';

//リスト装飾の定数
const useStyles = makeStyles({
    root: {
        backgroundColor: 'rgb(255, 255, 255,0.6)',
        height: 'auto',
    },
    chats: {
        height: '66vh',
        padding: '10px',
        overflow: 'auto',
    },
});

const Chats = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            < List className={classes.chats} id={"scroll-area"} >
                {props.chats.map((chat, index) => {
                    return <Chat text={chat.text} type={chat.type} key={index.toString()} />
                })
                }
                {props.location ? (
                    props.location.map((value, key) =>
                        <Chat location={value} key={key.toString()} />
                    )
                ) : (undefined)
                }

            </List >
        </div>
    )

}

export default Chats
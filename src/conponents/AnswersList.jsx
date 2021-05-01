import React from 'react';
import { Answer } from './index';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    chats: {
        backgroundColor: 'rgb(255, 255, 255,0.9)',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'flex-end',
        height: 'auto',
        padding: '11px',
        width: '100%',
        flexGrow: 1,
    },
});


const AnswersList = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.chats}>
                {props.answers.map((value, index) => {
                    return < Answer content={value.content} nextId={value.nextId} location={value.location} category={value.category} key={index.toString()} select={props.select} />
                    //mapでpropsの中身を引数で受け取り、配列の分だけ表示している
                    //key を記述しないとコンソールにエラーが出る

                })}
            </Box>
        </div>
    );
};

export default AnswersList;
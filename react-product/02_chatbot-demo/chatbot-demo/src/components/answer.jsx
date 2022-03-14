import React from "react";
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    button: {
        borderColor: "#ffb549",
        color: '#ffb549',
        fontWeight: 600,
        marginBottom: '8px',
        "&:hover": {
            backgroundColor: '#ffb549',
            borderColor: "#ffb549",
            color: '#fff'
        }
    }
}))

const Answer = (props) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.button}
            variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
            {props.content}
        </Button>
    );
}

export default Answer;
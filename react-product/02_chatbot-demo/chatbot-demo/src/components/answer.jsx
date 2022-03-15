import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Root = styled(Button)(() => ({
    borderColor: '#ffb549',
    color: '#ffb549',
    fontWeight: 600,
    marginBottom: '8px',
    "&:hover": {
        backgroundColor: '#ffb549',
        borderColor: "#ffb549",
        color: '#fff'
    }
}))

const Answer = (props) => {
    return (
        <Root
            variant="outlined"
            onClick={() => props.select(props.content, props.nextId)}>
            {props.content}
        </Root>
    );
}

export default Answer;
import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { styled } from "@mui/material/styles";
import NoProfile from "../assets/img/no-profile.png"
import User from "../assets/img/owner.png"

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
    const classUser = isQuestion ? '-owner' : '-user';
    
    const Root = styled(Avatar)(() => ({
        background: '#fff'
    }))
    
    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Root alt="icon" src={User} />
                ) : (
                    <Root alt="icon" src={NoProfile} />
                )}
            </ListItemAvatar>
            <div className={`p-chat__bubble ${classUser}`}>{props.text}</div>
        </ListItem>
    )
}

export default Chat;
import { React } from "react";
import List from '@mui/material/List';
import { Chat } from "./";
import { styled } from "@mui/material/styles";

const Root = styled(List)(() => ({
    height: 400,
    padding: '0',
    overflow: 'auto',
}))

const Chats = (props) => {
    return (
        <Root id={'scroll-area'} className={'c-grid__chat'}>
            {props.chats.map((chat, index) => (
                <Chat text={chat.text} type={chat.type} key={index.toString()}/>
            ))}
        </Root>
    )
}

export default Chats;
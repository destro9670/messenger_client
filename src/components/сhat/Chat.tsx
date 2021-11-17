import React, {FC, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "./style.css"
import {IChatIcon} from "../../models/userList/IChatIcon";
import ChatIconService from "../../services/ChatIconService";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatMSG from "./ChatMSG";


interface ChatIconProps {
}

const Chat: FC<ChatIconProps> = () => {

    const [chatIcons, setChatIcons] = useState<IChatIcon[]>([])

    useEffect(() => {
        ChatIconService.getIcons().then((res) => {
            console.log(res.data)
            setChatIcons(res.data)
        })
    }, [])

    return (
        <React.Fragment>
            <ChatHeader/>
            <ChatBody/>
            <ChatMSG/>
        </React.Fragment>
    )
};
export default observer(Chat);
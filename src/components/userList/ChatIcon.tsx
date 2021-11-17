import React, {FC, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "../../style.css"
import "./chat_icon.css"
import {IChatIcon} from "../../models/userList/IChatIcon";
import {IUser} from "../../models/IUser";
import {IMessage} from "../../models/IMessage";
import List from "../List";
import ChatIconItem from "./ChatIconItem";
import ChatIconService from "../../services/ChatIconService";


interface ChatIconProps {
    select(uuid: string): void
}

const ChatIcon: FC<ChatIconProps> = ({select}) => {

    const [chatIcons, setChatIcons] = useState<IChatIcon[]>([])

    useEffect(() => {
        ChatIconService.getIcons().then((res)=>{
            console.log(res.data)
            setChatIcons(res.data)
        })
    }, [])

    const onClick = (uuid: string) =>{
        select(uuid)
    }

    return (
        <React.Fragment>
                <List items={chatIcons}
                      renderItem={(chatIcon: IChatIcon) =>
                          <ChatIconItem
                              select={onClick}
                              chatIcon={chatIcon}
                              key={chatIcon.room.uuid}
                          />}
                />
        </React.Fragment>
    )
};
export default observer(ChatIcon);
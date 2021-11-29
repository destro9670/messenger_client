import React, {FC, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "./style.css"
import {IChatIcon} from "../../models/userList/IChatIcon";
import ChatIconService from "../../services/ChatIconService";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatMSG from "./ChatMSG";
import {IUser} from "../../models/IUser";
import {IUserMin} from "../../models/userList/IUserMin";
import {ELOOP} from "constants";
import {IMessage} from "../../models/IMessage";
import MessageService from "../../services/MessageService";


interface ChatIconProps {
    user: IUserMin;
}

const Chat: FC<ChatIconProps> = ({user}) => {

    const [messages, setMessages] = useState<IMessage[]>([])

    useEffect(() => {
        if (user.uuid!=="")
        MessageService.getMessage(user.uuid).then((res)=>{
            console.log(res.data)
            setMessages(res.data)
            console.log(messages)
            var millisecondsToWait = 2000;
            setTimeout(function() {
                // Whatever you want to do after the wait
            }, millisecondsToWait);
        })

    })

    const send = (message: IMessage) => {
      setMessages([...messages,message])
    }

    if (user.uuid!=="") {

        return (
            <React.Fragment>
                <ChatHeader user={user}/>
                <ChatBody user={user}
                          messages={messages}/>
                <ChatMSG user={user}
                         send={send}/>
            </React.Fragment>
        )
    } else {

        const tmp: IUserMin = {
            uuid: "",
            name: ""
        }

        return (
            <React.Fragment>
                <ChatHeader user={tmp}/>
            </React.Fragment>
        )
    }

};
export default observer(Chat);
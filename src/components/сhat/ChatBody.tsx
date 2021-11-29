import React, {FC, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "./style.css"
import {IChatIcon} from "../../models/userList/IChatIcon";
import ChatIconService from "../../services/ChatIconService";
import List from "../List";
import {IUser} from "../../models/IUser";
import {IMessage} from "../../models/IMessage";
import MessageService from "../../services/MessageService";
import ChatIconItem from "../userList/ChatIconItem";
import ChatItem from "./ChatItem";
import {IUserMin} from "../../models/userList/IUserMin";


interface ChatBodyProps {
    user: IUserMin;
    messages: IMessage[]
}

const ChatBody: FC<ChatBodyProps> = ({user, messages }) => {


    return (
        <React.Fragment>
            <div className="chat-page">
                <div className="msg-inbox">
                    <div className="chats">
                        <div className="msg-page">
                            <List items={messages} renderItem={(message: IMessage) =>
                                <ChatItem
                                    msg={message}
                                    key={message.date}
                                />}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default observer(ChatBody);
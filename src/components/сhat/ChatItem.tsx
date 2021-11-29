import React, {FC, useContext, useEffect} from 'react';
import {IMessage} from "../../models/IMessage";
import {Context} from "../../index";

interface ChatItemProps {
    msg: IMessage

}

const ChatItem: FC<ChatItemProps> = ({msg}) => {
    //onClick={() => onClick(user)}

    const {store} = useContext(Context)

    if (msg.room.name !== store.user)
        return (
            <div className="received-chats">
                <div className="received-msg">
                    <div className="received-msg-inbox">
                        <p>{msg.message} <br/> read status : {msg.status}</p>
                        <span className="time">{msg.time} | {msg.date}</span>
                    </div>
                </div>
            </div>
        )
    else
        return (
            <div className="outgoing-chats">
                <div className="outgoing-chats-msg">
                    <p>{msg.message} <br/> read status : {msg.status}</p>
                    <span className="time">{msg.time} | {msg.date}</span>
                </div>
            </div>
        )
};

export default ChatItem;

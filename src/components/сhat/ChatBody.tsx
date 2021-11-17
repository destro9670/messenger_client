import React, {FC, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "./style.css"
import {IChatIcon} from "../../models/userList/IChatIcon";
import ChatIconService from "../../services/ChatIconService";


interface ChatIconProps {
}

const ChatHeader: FC<ChatIconProps> = () => {

    return (
        <React.Fragment>
            <div className="chat-page">
                <div className="msg-inbox">
                    <div className="chats">
                        <div className="msg-page">

                            <div className="received-chats">
                                <div className="received-msg">
                                    <div className="received-msg-inbox">
                                        <p>Hi !! This is message from Jhon Lewis</p>
                                        <span className="time">11:01 PM | October 11</span>
                                    </div>
                                </div>
                            </div>

                            <div className="outgoing-chats">
                                <div className="outgoing-chats-msg">
                                    <p>Hi !! This is message from Jhon Lewis</p>
                                    <span className="time">11:01 PM | October 11</span>
                                </div>
                            </div>

                            <div className="received-chats">
                                <div className="received-msg">
                                    <div className="received-msg-inbox">
                                        <p>Hi !! This is message from Jhon Lewis</p>
                                        <span className="time">11:01 PM | October 11</span>
                                    </div>
                                </div>
                            </div>

                            <div className="outgoing-chats">
                                <div className="outgoing-chats-msg">
                                    <p>Hi !! This is message from Jhon Lewis</p>
                                    <span className="time">11:01 PM | October 11</span>
                                </div>
                            </div>

                            <div className="received-chats">
                                <div className="received-msg">
                                    <div className="received-msg-inbox">
                                        <p>Hi !! This is message from Jhon Lewis</p>
                                        <span className="time">11:01 PM | October 11</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default observer(ChatHeader);
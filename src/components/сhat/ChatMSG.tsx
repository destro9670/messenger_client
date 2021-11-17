import React, {FC, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "./style.css"
import {IChatIcon} from "../../models/userList/IChatIcon";
import ChatIconService from "../../services/ChatIconService";


interface ChatIconProps {
}

const ChatMSG: FC<ChatIconProps> = () => {

    return (
        <React.Fragment>
            <div className={"msg-btn-container"}>
                <div className="input-group-c input-group">
                    <input type="text" className="form-control form-control-c" placeholder="Message"
                           aria-label="message" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-c btn-outline-secondary" type="button">Send</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default observer(ChatMSG);
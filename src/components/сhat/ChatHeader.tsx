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
            <div className="msg-header">
                <div className="active">
                    <h4>John Lewis</h4>
                </div>
            </div>
        </React.Fragment>
    )
};
export default observer(ChatHeader);
import React, {FC, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "./style.css"
import {IUserMin} from "../../models/userList/IUserMin";


interface ChatHeaderProps {
    user: IUserMin
}

const ChatHeader: FC<ChatHeaderProps> = ({user}) => {

    return (
        <React.Fragment>
            <div className="msg-header">
                <div className="active">
                    <h4>{user.name}</h4>
                </div>
            </div>
        </React.Fragment>
    )
};
export default observer(ChatHeader);
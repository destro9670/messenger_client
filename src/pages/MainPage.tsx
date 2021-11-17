import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "../style.css"
import "./mes_page.css"
import {IUser} from "../models/IUser";
import {IMessage} from "../models/IMessage";
import {IChatIcon} from "../models/userList/IChatIcon";
import ChatIcon from "../components/userList/ChatIcon";
import {AddUserForm} from "../components/userList/AddUserForm";
import MessageService from "../services/MessageService";
import ChatIconService from "../services/ChatIconService";
import Chat from "../components/сhat/Chat";

const MainPage: React.FC = () => {

    const [chatIcons, setChatIcons] = useState<IChatIcon[]>([])
    const [messages, setMessages] = useState<IMessage[]>([])



    const select = (uuid: string) => {
        MessageService.getMessage(uuid).then((res)=>{
            setMessages(res.data)
        })
    }

    return (
        <React.Fragment>
            <div className="cbody text-monospace shadow">
                <div className="container-fluid content">
                    <div className="row bg-light">
                        <div className="col-4 block1">
                            <AddUserForm/>
                            <ChatIcon
                            select={select}/>
                        </div>
                        <div className="col-8 block2">
                            <Chat/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default observer(MainPage);
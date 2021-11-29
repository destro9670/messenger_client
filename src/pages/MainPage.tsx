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
import {IUserMin} from "../models/userList/IUserMin";

const MainPage: React.FC = () => {

    const [chatIcons, setChatIcons] = useState<IChatIcon[]>([])
    const [messages, setMessages] = useState<IMessage[]>([])

    const tmp: IUserMin = {
        uuid: "",
        name: ""
    }
    const [selectedUser, setSelectedUser] = useState<IUserMin>(tmp)

    useEffect(() => {
        ChatIconService.getIcons().then((res)=>{
            console.log(res.data)
            setChatIcons(res.data)

            var millisecondsToWait = 2000;
            setTimeout(function() {
                // Whatever you want to do after the wait
            }, millisecondsToWait);

        })
    })

    const update = (user: IChatIcon) => {
        setChatIcons([...chatIcons, user])
    }

    const select = (user: IUserMin) => {
        setSelectedUser(user)
    }

    return (
        <React.Fragment>
            <div className="cbody text-monospace shadow">
                <div className="container-fluid content">
                    <div className="row bg-light">
                        <div className="col-4 block1">
                            <AddUserForm onAdd={update}/>
                            <ChatIcon
                                select={select}
                                chatIcons={chatIcons}/>
                        </div>
                        <div className="col-8 block2">
                            <Chat user={selectedUser}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default observer(MainPage);
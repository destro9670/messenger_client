import React, {FC, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import "./style.css"
import {IUserMin} from "../../models/userList/IUserMin";
import {IMessage} from "../../models/IMessage";
import MessageService from "../../services/MessageService";


interface ChatMSGProps {
    user:IUserMin
    send (message: IMessage):void
}

const ChatMSG: FC<ChatMSGProps> = ({user, send}) => {

    const [message, setMessage] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            click()
        }

    }

    const click = () => {
        MessageService.send(user.uuid, message).then((res)=>{
            console.log(res.data)
            send(res.data)
        })
        setMessage('')
    }

    return (
        <React.Fragment>
            <div className={"msg-btn-container"}>
                <div className="input-group-c input-group">
                    <input type="text"
                           className="form-control form-control-c"
                           placeholder="Message"
                           aria-label="message"
                           aria-describedby="basic-addon2"
                           onChange={changeHandler}
                           value={message}
                           onKeyPress={keyPressHandler}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-c btn-outline-secondary" type="button"
                            onClick={click}
                        >Send</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default observer(ChatMSG);
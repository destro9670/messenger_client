import React, {FC, useEffect} from 'react';
import {IChatIcon} from "../../models/userList/IChatIcon";
import {IUserMin} from "../../models/userList/IUserMin";

interface UserItemProps {
    chatIcon: IChatIcon
    select(uuid: IUserMin): void

}

const ChatIconItem: FC<UserItemProps> = ({chatIcon, select/*, onClick*/}) => {
    //onClick={() => onClick(user)}

    return (
        <div className=" row m-1 mt-4 p-3 shadow"
        onClick={()=>{select(chatIcon.room)}}>
            <div className="col-9">
                <div>
                    {chatIcon.room.name}
                </div>
                <div>
                    {chatIcon.message.message}
                </div>
            </div>
                <div className="col-3">
                    <div>
                        {chatIcon.message.time}
                    </div>
                    {chatIcon.message.status}
                </div>
            </div>
    )
};

export default ChatIconItem;

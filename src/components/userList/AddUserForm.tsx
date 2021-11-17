import React, {FC, useState} from 'react';
import {observer} from "mobx-react-lite";
import ChatIconService from "../../services/ChatIconService";
import "./chat_icon.css"

interface AddUserFormProps {
    onAdd(title: string): void
}

export const AddUserForm: FC/*<AddUserFormProps>*/ = props => {

    const [username, setUsername] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            //props.onAdd(templateName)
            //setTemplateName('')
            btnClick()
        }

    }

    const btnClick = () => {
        //props.onAdd()
        ChatIconService.addNew(username).then(()=>{

        })
    }

    return (
        <div className=" my-3 mx-4">
            <form>
                <div className=" castom_row input-group">

                    <input type="text"
                           className="left  form-control"
                           placeholder="Username"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           onChange={changeHandler}
                           value={username}
                           onKeyPress={keyPressHandler}
                    />
                    <div className=" right input-group-append">
                        <button className=" btn btn-primary "
                                type="button"
                                onClick={btnClick}
                        >
                            Add user
                        </button>
                    </div>

                </div>
            </form>
        </div>

    );
};

export default observer(AddUserForm);
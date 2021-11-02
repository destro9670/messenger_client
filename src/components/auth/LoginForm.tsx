import React, {FC, useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {NavLink, useHistory} from 'react-router-dom';

interface LoginFormProps{
    onLogin(email:string, password:string): void
}

const LoginForm: FC<LoginFormProps> = props => {
    const {store} = useContext(Context)

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState("");

    function btnOnClick() {

        //props.onLogin(email, password);
        props.onLogin(login, password)
    }



    return (


        <form className="mb-5">
            <h1 className="text-center py-2 text-info">LOGIN</h1>

            <div className="form-group my-3">
                <input
                    onChange={e => setLogin(e.target.value)}
                    value={login}
                    type="text"
                    placeholder='login'
                    className="form-control"
                />
            </div>
            <div className="form-group my-3">
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="Password"
                    placeholder='Password'
                    className="form-control"
                />
            </div>
            {errorMessage && <div className="error_text"> {errorMessage} </div>}
            <div className="row">
                <div className="col-1"></div>
                <button onClick={btnOnClick}
                        className="btn col-3 btn-primary">Login
                </button>

                <div className="col-4"></div>
                <NavLink className="btn col-3 btn-primary"
                         to="/registration">
                    Registration
                </NavLink>
                <div className="col-1"></div>
            </div>
        </form>

    )
};

export default observer(LoginForm);

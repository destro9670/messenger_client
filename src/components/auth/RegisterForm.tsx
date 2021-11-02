import React, {FC, useContext, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

const RegisterForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const {store} = useContext(Context)
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [disable, setDisable] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    function handleConfPasswordOnChange(confPassword: string) {
        setConfirmPassword(confPassword);

        if (confPassword !== password || confPassword === "") {
            if (confPassword !== password)
                setErrorMessage("Password don`t much!")
            else
                setErrorMessage("Empty password Fields")
            setDisable(true)

        } else {
            setDisable(false)
            setErrorMessage("")
        }
    }

    function handlePasswordOnChange(password1: string) {
        setPassword(password1);

        if (confirmPassword !== password1 || password1 === "") {
            if (confirmPassword !== password1)
                setErrorMessage("Password don`t much!")
            else
                setErrorMessage("Empty password Fields")
            setDisable(true)
            setErrorMessage("Password don`t much!")

        } else {
            setDisable(false)
            setErrorMessage("")
        }
    }

    return (

        <div className="container col-12 col-sm-11 col-md-9 col-lg-8 col-xl-6 my-5">

            <h1 className="text-center py-2 text-info">REGISTRATION</h1>

            <form>

                <div className="form-group my-3">
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        placeholder='Username'
                        className="form-control"
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                        onChange={e => handlePasswordOnChange(e.target.value)}
                        value={password}
                        type="Password"
                        placeholder='Password'
                        className="form-control"
                    />
                </div>


                {errorMessage && <div className="error_text"> {errorMessage} </div>}

                <div className="form-group my-3">
                    <input
                        onChange={e => handleConfPasswordOnChange(e.target.value)}
                        value={confirmPassword}
                        type="Password"
                        placeholder='Confirm Password'
                        className="form-control"
                    />
                </div>

                <div className="row">
                    <div className="col-1"></div>
                    <button onClick={() => store.registration(email, password).then()}
                            className="btn col-3 btn-primary"
                            disabled={disable}
                    >REGISTRATION
                    </button>
                    <div className="col-4"></div>
                    <NavLink className="btn col-3 btn-primary"
                             to="/login">
                        LOGIN
                    </NavLink>
                    <div className="col-1 "></div>
                </div>
            </form>

        </div>
    )
};


export default observer(RegisterForm);

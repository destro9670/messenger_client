import React, {useContext} from "react";
import {Context} from "../index";
import {useHistory, useParams} from 'react-router-dom';
import {observer} from "mobx-react-lite";


const Header: React.FC = () => {
    const history = useHistory();
    const {tempUUID}: {tempUUID: string} = useParams();

    async function logout() {
        await store.logout()
        history.push('/login');
    }

    const {store} = useContext(Context)

    if (store.isAuth) {
        if (tempUUID){
            return (
                <header>
                    <nav className=" navbar  navbar-h navbar-expand  row">
                        <div className="col-10"></div>
                        <button className="btn btn-light btn-sm col-1" onClick={logout}>Logout
                        </button>
                        <div className="col-1"></div>
                    </nav>
                </header>
            )
        }else {
            return (
                <header>
                    <nav className=" navbar  navbar-h navbar-expand  row">
                        <div className="col-1"></div>
                        <div className="col-9 username"> {store.user}</div>
                        <button className="btn btn-light btn-sm col-1" onClick={logout}>Logout
                        </button>
                        <div className="col-1"></div>
                    </nav>
                </header>
            )
        }
    } else {
        return (
            <header>
                <nav className=" navbar  navbar-h navbar-expand  ">
                </nav>
            </header>
        )
    }

};
export default observer(Header);
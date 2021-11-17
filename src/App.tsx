import React, {FC, useContext, useEffect} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Header from "./components/Header";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import TemplatePage from "./pages/MainPage";
import './style.css';
import './template-config-page.css';
import MainPage from "./pages/MainPage";


const App: FC = () => {

    const {store} = useContext(Context)

    async function login(email: string, password: string) {
        try {

            store.login(email, password).then(
                (resp)=>{
                    store.setAuth(true)
                    new Promise(resolve => setTimeout(resolve, 500)).then(()=>{
                        window.location.reload()
                    })
                }
            );

        } catch (e) {
            console.error(e.message);

        }

    }

    useEffect(()=>{
        if (localStorage.getItem('token')){
            store.checkAuth().then()
        }
    },[])

    if (store.isLoading) {
        return <div>Loading...</div>
    }



    if (store.isAuth) {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" exact>
                        <MainPage/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    } else {
        return (
            <div className="cbody text-monospace shadow mr-0 ">
                <div className="container-fluid content">


                    <div className="row bg-light ">
                        <BrowserRouter>
                            <Header/>
                            <Switch>
                                <Route path="/login" exact>
                                    <LoginForm onLogin={login}/>
                                </Route>
                                <Route path="/registration" exact>
                                    <RegisterForm/>
                                </Route>
                                <Redirect to="/login"/>
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </div>

        )
    }
}

export default observer(App);

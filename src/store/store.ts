import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";


export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(loading: boolean) {
        this.isLoading = loading;
    }


    async login(email: string, password: string) {
        try {
            console.log()

            AuthService.login(email, password).then((response) => {
                    console.log(response.data);
                    localStorage.setItem('token', response.data.accessToken);
                    localStorage.setItem('refresh', response.data.refreshToken);
                    //this.setUser(response.data.user);
                    console.log(response)
                    this.setAuth(true)
                    window.location.reload()
                    return response;
                }
            );


        } catch (e) {
            console.error(e);
            throw e;
        }

    }

    async registration(email: string, password: string) {

        try {
            const response = await AuthService.register(email, password);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            //this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            AuthService.logout().then()
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');

            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            if (localStorage.getItem('token')) {
                const response = await AuthService.checkAuth()
                console.log("resp checkAuth " + response.data.username)
                this.setAuth(true);
                //this.setUser(response.data.user);
            }
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false);
        }
    }

}
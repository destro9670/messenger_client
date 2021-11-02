import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";


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

            AuthService.login(email, password).then((response) => {
                    console.log(response);
                    localStorage.setItem('token', response.data.accessToken);
                    this.setUser(response.data.user);
                    console.log(response)
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
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');

            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            if (localStorage.getItem('token')) {
                const response = await axios.post<AuthResponse>(`${API_URL}/chek-auth`);
                console.log("resp checkAuth " + response)
                this.setAuth(true);
                this.setUser(response.data.user);
            }
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false);
        }


    }

}
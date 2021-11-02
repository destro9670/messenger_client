import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService{
    static async login(email: string, password: string ): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/auth', {email, password});
    }

    static async register(email: string, password: string ): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/register', {email, password})
    }

    static async logout(): Promise<AxiosResponse<AuthResponse>>{
        return $api.post('/logout',{refreshToken: localStorage.getItem('refreshToken')})
    }
}

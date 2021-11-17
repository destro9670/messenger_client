import $api, {API_URL} from "../http";
import axios, {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService{
    static async login(username: string, password: string ): Promise<AxiosResponse<AuthResponse>>{
        return axios.post<AuthResponse>(`${API_URL}/auth`, {username, password});
    }

    static async register(username: string, password: string ): Promise<AxiosResponse>{
        return axios.post<AuthResponse>(`${API_URL}/register`, {username, password})
    }

    static async logout(): Promise<AxiosResponse<AuthResponse>>{
        return axios.post<AuthResponse>(`${API_URL}/logout`,{refreshToken: localStorage.getItem('refreshToken')})
    }
    static async checkAuth(): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/check-auth')
    }

}

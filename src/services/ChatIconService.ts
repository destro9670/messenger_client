import $api, {API_URL} from "../http";
import axios, {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {IChatIcon} from "../models/userList/IChatIcon";

export default class ChatIconService{
    static async getIcons(): Promise<AxiosResponse<IChatIcon[]>>{
        return $api.get<IChatIcon[]>(`${API_URL}/users`);
    }

    static async addNew(username: string): Promise<AxiosResponse>{
        return $api.post<AuthResponse>(`${API_URL}/users`, {username})
    }
}

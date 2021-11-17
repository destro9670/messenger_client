import axios, {AxiosResponse} from "axios";
import {IChatIcon} from "../models/userList/IChatIcon";
import $api, {API_URL} from "../http";
import {AuthResponse} from "../models/response/AuthResponse";
import {IMessage} from "../models/IMessage";

export default class MessageService{
    static async getMessage(roomUUID: string): Promise<AxiosResponse<IMessage[]>>{
        return $api.get<IMessage[]>(`${API_URL}/messages?roomUUID=${roomUUID}`);
    }

    static async addNew(username: string): Promise<AxiosResponse>{
        return $api.post<AuthResponse>(`${API_URL}/users`, {username})
    }
}
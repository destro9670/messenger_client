import axios, {AxiosResponse} from "axios";
import {IChatIcon} from "../models/userList/IChatIcon";
import $api, {API_URL} from "../http";
import {AuthResponse} from "../models/response/AuthResponse";
import {IMessage} from "../models/IMessage";

export default class MessageService{
    static async getMessage(roomUUID: string): Promise<AxiosResponse<IMessage[]>>{
        return $api.get<IMessage[]>(`${API_URL}/messages?roomUUID=${roomUUID}`);
    }

    static async send(roomUUID: string, message: string): Promise<AxiosResponse<IMessage>>{
        return $api.post<IMessage>(`${API_URL}/messages`,{message, roomUUID})
    }
}
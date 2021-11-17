import {IUser} from "../IUser";
/*

export interface AuthResponse{
    accessToken: string;
    user: IUser;
}*/

export interface AuthResponse{
    refreshToken: string;
    accessToken: string;
    username: string;
}
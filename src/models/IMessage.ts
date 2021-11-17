import {IUser} from "./IUser";

export interface IMessage{
    message: string;
    date: string;
    time:string;
    status: string;
    from: IUser;
}

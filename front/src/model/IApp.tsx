export default interface IApp{
    chats: IChat[];
    user: IUser;
}

export interface IChat{
    id: number;
    id_user1: number;
    name_user1: string;
    id_user2: number;
    name_user2: string;
    message: string;
    time: string;
}

export interface IMessage {
    id: number;
    chatId: number;
    message: string;
    userId: number;
}

export interface IUser {
    id: number;
    name: string;
    photo: string;
}
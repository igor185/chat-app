export default interface IApp{
    chatList: IChatList;
    user: {
        isFetching: boolean
        data: IUser | null
    };
    chat: IChatView;
    showPanel: boolean;
    page: "chat" | "login" | "reg",
    loginPage?: {
        isFetching: boolean,
        error: any;
    }
    regPage?: {
        isFetching: boolean,
        error: any;
    }
}

export interface IChatList {
    data: IMessage[] | null
    isFetching: boolean;
}
export interface IChat{
    id: number;
    user: IUser;
}

export interface IMessage {
    id: number;
    chat: IChat;
    message: string;
    user: IUser;
    time: string;
}

export interface IUser {
    id: number;
    username: string;
    avatar: string;
}
export interface IChatView {
    isFetching: boolean;
    isOpen: boolean;
    data: IMessage[]
}
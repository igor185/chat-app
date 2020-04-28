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
    search: {
        isFetching: boolean
        data?: IUser[]
    }
}

export interface IChatList {
    data: IMessageView[] | null
    isFetching: boolean;
}
export interface IChat{
    id: number;
}

export interface IMessageView {
    chat: IChat;
    message: IMessage;
    user: IUser;
}
export interface IMessage{
    id: number
    message: string
    chat: IChat;
    user: IUser
    time: string
}

export interface IUser {
    id: number;
    username: string;
    avatar: string;
}
export interface IChatView {
    id: number | null;
    isFetching: boolean;
    isOpen: boolean;
    data: IMessage[]
}
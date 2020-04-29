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
        isOpen: boolean
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
    time: number
    file: IFile | null;
}

export interface IUser {
    id: number;
    username: string;
    avatar: string;
    about: string;
    email: string | null;
    confirm: string;
    options: IOptions;
}
export interface IChatView {
    id: number | null;
    isFetching: boolean;
    isOpen: boolean;
    data: IMessage[]
    user: IUser | null
}

export interface IFile {
    fileDownloadUri: string
    fileName: string
    fileType: string
    size: number
}

export interface IOptions {
    newChat: boolean
    eachMessage: boolean
    sendMessage: boolean
}
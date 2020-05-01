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
    isTyping?: boolean
    timeTyping?: null | Date
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
    online: boolean;
    time: Date | number;
}
export interface IChatView {
    id: number | null;
    isFetching: boolean;
    isOpen: boolean;
    data: IMessage[]
    user: IUser | null
    isTyping?: boolean
}

export interface IFile {
    fileDownloadUri: string
    fileName: string
    fileType: string
    size: number
    height: number
}

export interface IOptions {
    newChat: boolean
    eachMessage: boolean
    sendMessage: boolean
}
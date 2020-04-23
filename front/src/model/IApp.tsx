export default interface IApp{
    chatList: IChatList;
    user?: IUser;
    chat: IChatView;
    showPanel: boolean;
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
    name: string;
    avatar: string;
}
export interface IChatView {
    isFetching: boolean;
    isOpen: boolean;
    data: IMessage[]
}
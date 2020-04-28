import * as types from "./constants";
import {IMessage, IUser} from "../model/IApp";

export const clearStore = () => ({
  type: types.REMOVE_STORE
});


export const fetchChats = () => ({
    type: types.FETCH_CHATS
});

export const fetchMessages = (chatId: number) => ({
    type: types.FETCH_MESSAGES,
    payload: {
        id: chatId
    }
});

export const togglePanel = () => ({
    type: types.TOGGLE_PANEL
});

export const newMessage = (message: IMessage) => {
    return {
        type: types.ADD_NEW_MESSAGE,
        payload: {
            message
        }
    }
};

export const loginUser = (login: string, password: string) => ({
    type: types.LOGIN,
    payload: {
        login,
        password
    }
});

export const regUser = (login: string, password: string, avatar: string) => ({
    type: types.REG,
    payload: {
        login,
        password,
        avatar
    }
});

export const changePage = (page: string) => ({
    type: types.CHANGE_PAGE,
    payload: page
});

export const fetchUser = () => ({
    type: types.FETCH_USER
});

export const search = (search: string) => ({
   type: types.SEARCH,
   payload: { search }
});

export const newChat = (userId: number) => ({
    type: types.CREATE_CHAT,
    payload: {
        userId
    }
});

export const addChatToList = (chatId: number, user: IUser) => ({
    type: types.ADD_CHAT_TO_LIST,
    payload: {
        chatId,
        user
    }
});

export const deleteMessage = (messageId: number, chatId: number) => ({
    type: types.DELETE_MESSAGE,
    payload: {
        messageId,
        chatId
    }
});

export const deleteMessageDone = (message: IMessage) => ({
    type: types.DELETE_MESSAGE_DONE,
    payload: {
        message
    }
});

export const editMessage = (messageId: number, chatId: number, message: string) => ({
    type: types.EDIT_MESSAGE,
    payload: {
        messageId,
        chatId,
        message
    }
});

export const editMessageDone = (message: IMessage) => ({
    type: types.EDIT_MESSAGE_DONE,
    payload: {
        message
    }
});

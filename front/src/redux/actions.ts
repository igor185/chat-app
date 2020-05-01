import * as types from "./constants";
import {IMessage, IOptions, IUser} from "../model/IApp";

export const clearStore = () => ({
  type: types.REMOVE_STORE
});


export const fetchChats = () => ({
    type: types.FETCH_CHATS
});

export const fetchMessages = (chatId: number, user: IUser) => ({
    type: types.FETCH_MESSAGES,
    payload: {
        id: chatId,
        user
    }
});

export const closeChat = () => ({
    type: types.CLOSE_CHAT
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

export const toggleSearch = () => ({
    type: types.TOGGLE_SEARCH
});

export const newChat = (userId: number, user: IUser) => ({
    type: types.CREATE_CHAT,
    payload: {
        userId,
        user
    }
});

export const addChatToList = (chatId: number, user: IUser, setChat: boolean) => ({
    type: types.ADD_CHAT_TO_LIST,
    payload: {
        chatId,
        user,
        setChat
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

export const updateAvatar = (src: string) => ({
    type: types.UPDATE_AVATAR,
    payload: {
        src
    }
});

export const editAbout = (message: string) => ({
    type: types.UPDATE_ABOUT,
    payload: {
        message
    }
});

export const editEmail = (email: string) => ({
    type: types.UPDATE_EMAIL,
    payload: {
        email
    }
});

export const confirmEmail = (email: string) => ({
    type: types.SEND_CONFIRM_MESSAGE,
    payload: {
        email
    }
});

export const sendOptions = (options: IOptions) => ({
    type: types.SEND_OPTIONS,
    payload: {
        options
    }
});

export const sendEmail = (message: IMessage) => ({
    type: types.SEND_EMAIL,
    payload: {
        message
    }
});

export const clearLogin = () => ({ type: types.CLEAR_LOGIN });

export const clearReg = () => ({ type: types.CLEAR_REG });


export const typingMessage = (chatId: number, userId: number) => ({
    type: types.TYPING_MESSAGE,
    payload: {
        chatId,
        userId
    }
});

export const newTypingMessage = (chatId: number) => ({
    type: types.NEW_TYPING_MESSAGE,
    payload: {
        chatId
    }
});

export const setTyping = (chatId: number, isTyping: boolean, timeTyping: any) => ({
    type: types.SET_TYPING_MESSAGE,
    payload: {
        chatId,
        isTyping,
        timeTyping
    }
})
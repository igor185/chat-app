import IApp, {IMessage} from './../model/IApp'
import IAction from './../model/IAction'
import * as types from './constants';
import {sortChatList} from "../helpers";

const initialState: IApp = {
    chatList: {
        data: null,
        isFetching: false
    },
    user: {
        isFetching: false,
        data: null
    },
    chat: {
        id: null,
        isFetching: false,
        isOpen: false,
        data: []
    },
    showPanel: true,
    page: localStorage.getItem('token') && localStorage.getItem('token') !== "undefined" ? "chat" : "login",
    search: {
        isFetching: false,
        isOpen: true
    }
};

export function reducer(state: IApp = initialState, action: IAction): IApp {
    let data, message: IMessage, chatList, messageList;
    switch (action.type) {
        case types.FETCH_CHATS:
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    isFetching: true
                }
            };
        case types.TOGGLE_PANEL:
            return {
                ...state,
                showPanel: !state.showPanel
            };
        case types.TOGGLE_SEARCH:
            return {
                ...state,
                search: {
                    ...state.search,
                    isOpen: !state.search.isOpen
                },
                showPanel: true
            };
        case types.FETCH_CHATS_DONE:
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    data: sortChatList(action.payload),
                    isFetching: false,
                }
            };
        case types.FETCH_MESSAGES:
            return {
                ...state,
                chat: {
                    ...state.chat,
                    id: action.payload.id,
                    isFetching: true,
                    isOpen: true
                }
            };
        case types.FETCH_MESSAGES_DONE:
            return {
                ...state,
                chat: {
                    ...state.chat,
                    data: action.payload,
                    isFetching: false
                }
            };
        case types.ADD_NEW_MESSAGE:
            message = action.payload.message;
            data = ([...(state.chatList.data || [])]).map(elem => {
                if (elem.chat.id === message.chat.id) {
                    elem.message = message;
                }
                return elem;
            });
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    // @ts-ignore
                    data: sortChatList(data)
                },
                chat: {
                    ...state.chat,
                    data: state.chat.id === message.chat.id ? [...(state.chat.data || []), action.payload.message] : state.chat.data
                }
            };
        case types.CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            };
        case types.REMOVE_STORE:
            return {
                ...initialState,
                page: "login"
            };
        case types.FETCH_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    isFetching: true
                }
            };
        case types.FETCH_USER_DONE:
            return {
                ...state,
                user: {
                    ...state.user,
                    isFetching: false,
                    data: action.payload.user
                }
            };
        case types.LOGIN:
            return {
                ...state,
                loginPage: {
                    isFetching: true,
                    error: null
                }
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                loginPage: {
                    isFetching: false,
                    error: action.payload.error
                }
            };
        case types.REG:
            return {
                ...state,
                regPage: {
                    isFetching: true,
                    error: null
                }
            };
        case types.REG_FAIL:
            return {
                ...state,
                regPage: {
                    isFetching: false,
                    error: action.payload.error
                }
            };
        case types.SEARCH:
            return {
                ...state,
                search: {
                    ...state.search,
                    isFetching: true
                }
            };
        case types.SEARCH_DONE:
            return {
                ...state,
                search: {
                    ...state.search,
                    isFetching: false,
                    data: action.payload
                }
            };
        case types.CREATE_CHAT:
            return {
                ...state,
                chat: {
                    ...state.chat,
                    isFetching: true,
                    isOpen: true
                }
            };
        case types.CREATE_CHAT_DONE:
            return {
                ...state,
                chat: {
                    ...state.chat,
                    id: action.payload.chatId,
                    isFetching: false,
                    data: []
                }
            };
        case types.ADD_CHAT_TO_LIST:
            data = [...(state.chatList.data || [])];
            data.push({
                chat: {id: action.payload.chatId},
                message: null as unknown as IMessage,
                user: action.payload.user
            });
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    // @ts-ignore
                    data: sortChatList(data)
                }
            };
        case types.DELETE_MESSAGE_DONE:
            message = action.payload.message;
            if(message.chat.id !== state.chat.id)
                return state;
            messageList = [...(state.chat.data || [])]
                .map(m => m.id === message.id ? undefined : m)
                .filter(m => m);

            return {
                ...state,
                chat: {
                    ...state.chat,
                    data: messageList as IMessage[]
                }
            };
        case types.EDIT_MESSAGE_DONE:
            message = action.payload.message;
            if(message.chat.id !== state.chat.id)
                return state;
            messageList = [...(state.chat.data || [])]
                .map(m => m.id === message.id ? message : m);

            return {
                ...state,
                chat: {
                    ...state.chat,
                    data: messageList as IMessage[]
                }
            };
        default:
            return state;
    }
} 
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
        data: [],
        user: null,
        count: 0,
        userId: null
    },
    showPanel: true,
    page: localStorage.getItem('token') && localStorage.getItem('token') !== "undefined" ? "chat" : "login",
    search: {
        isFetching: false,
        isOpen: false
    }
};

export function reducer(state: IApp = initialState, action: IAction): IApp {
    let data, message: IMessage, chatList, messageList, chatId: number;
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
                    isOpen: true,
                    user: action.payload.user
                },
                chatList: {
                    ...state.chatList,
                    data: (state.chatList.data || []).map(el => (action.payload.id === el.chat.id ?
                        { ...el, chat: { ...el.chat, ...(action.payload.user.id === el.chat.userId ? {count: 0, userId: null} : {})}} : el))
                },
            };
        case types.FETCH_MESSAGES_DONE:
            message = action.payload.length && action.payload[0];
            return {
                ...state,
                chat: {
                    ...state.chat,
                    count: message ? message.chat.count : 0,
                    userId: message ? message.chat.userId : 0,
                    data: action.payload,
                    isFetching: false
                }
            };
        case types.ADD_NEW_MESSAGE:
            message = action.payload.message;
            data = ([...(state.chatList.data || [])]).map(elem => {
                if (elem.chat.id === message.chat.id) {
                    elem.message = message;
                    elem.chat.count = message.chat.count;
                    elem.chat.userId = message.chat.userId;
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
                    count:  message.chat.count,
                    userId: message.chat.userId,
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
                    data: {
                        ...action.payload.user,
                        online: true,
                        time: new Date()
                    }
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
                    isOpen: true,
                    user: action.payload.user
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
                chat: {id: action.payload.chatId, count: 0, userId: null},
                message: null as unknown as IMessage,
                user: action.payload.user
            });
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    // @ts-ignore
                    data: sortChatList(data)
                },
                chat: action.payload.setChat ? {
                    id: action.payload.chatId,
                    isFetching: false,
                    isOpen: true,
                    data: [],
                    user: action.payload.user,
                    count: 0,
                    userId: null
                } : state.chat
            };
        case types.DELETE_MESSAGE_DONE:
            message = action.payload.message;
            if (message.chat.id !== state.chat.id)
                return state;
            messageList = [...(state.chat.data || [])]
                .map(m => m.id === message.id ? undefined : m)
                .filter(m => m);

            return {
                ...state,
                chat: {
                    ...state.chat,
                    count: message.chat.count,
                    userId: message.chat.userId,
                    data: messageList as IMessage[]
                }
            };
        case types.EDIT_MESSAGE_DONE:
            message = action.payload.message;
            if (message.chat.id !== state.chat.id)
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
        case types.CLOSE_CHAT:
            return {
                ...state,
                chat: initialState.chat
            };
        case types.UPDATE_AVATAR_DONE:
            return {
                ...state,
                user: {
                    ...state.user,
                    // @ts-ignore
                    data: {
                        ...(state.user.data || {}),
                        avatar: action.payload.src
                    }
                }
            };
        case types.UPDATE_ABOUT_DONE:
            return {
                ...state,
                user: {
                    ...state.user,
                    // @ts-ignore
                    data: {
                        ...(state.user.data || {}),
                        about: action.payload.message
                    }
                }
            };
        case types.UPDATE_EMAIL_DONE:
            return {
                ...state,
                user: {
                    ...state.user,
                    // @ts-ignore
                    data: {
                        ...(state.user.data || {}),
                        email: action.payload.email,
                        confirm: false
                    }
                }
            };
        case types.SEND_OPTIONS_DONE:
            return {
                ...state,
                user: {
                    ...state.user,
                    // @ts-ignore
                    data: {
                        ...(state.user.data || {}),
                        options: action.payload.options
                    }
                }
            };
        case types.CLEAR_LOGIN:
            return {
                ...state,
                loginPage: initialState.loginPage
            };
        case types.CLEAR_REG:
            return {
                ...state,
                regPage: initialState.regPage
            };
        case types.SET_TYPING_MESSAGE:
            data = state.chatList.data || [];
            const index = data.findIndex(el => el.chat.id === action.payload.chatId);
            if (index === -1)
                return state;

            const chat = {...data[index]};
            chat.isTyping = action.payload.isTyping;
            chat.timeTyping = action.payload.timeTyping;

            data[index] = chat;
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    data
                },
                chat: state.chat.id !== action.payload.chatId ? state.chat : {
                    ...state.chat,
                    isTyping: action.payload.isTyping
                }
            };
        case types.SET_ONLINE_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    data: !state.user.data ? state.user.data : {
                        ...state.user.data,
                        online: action.payload.status,
                        time: new Date()
                    }
                },
                chat: {
                    ...state.chat,
                    user: !state.chat.user ? state.chat.user : {
                        ...state.chat.user,
                        online: action.payload.status,
                        time: new Date()
                    }
                },
                chatList: {
                    ...state.chatList,
                    data: !state.chatList.data ? state.chatList.data : state.chatList.data.map(el => ({
                        ...el,
                        user: !el.user || el.user.id !== action.payload.userId ? el.user : {
                            ...el.user,
                            online: action.payload.status,
                            time: new Date()
                        }
                    }))
                },
                search: {
                    ...state.search,
                    data: !state.search.data ? state.search.data : state.search.data.map(user => ({
                        ...user,
                        online: action.payload.status,
                        time: new Date()
                    }))
                }
            };
        case types.SET_READ_MESSAGE:
        case types.READ_MESSAGE:
            chatId = action.payload.chatId;

            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    data: (state.chatList.data || []).map(el => (chatId === el.chat.id ? { ...el, chat: { ...el.chat, count: 0, userId: null }} : el))
                },
                chat: state.chat.id !== chatId ? state.chat : { ...state.chat, count: 0, userId: null }
            };
        case types.INCREASE_COUNT:
            chatId = action.payload.chatId;

            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    data: (state.chatList.data || []).map(el => (chatId === el.chat.id ? { ...el, chat: { ...el.chat, count: el.chat.count + 1 }} : el))
                },
                chat: state.chat.id !== chatId ? state.chat : { ...state.chat, count: state.chat.count + 1}
            };
        default:
            return state;
    }
}
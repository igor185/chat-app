import IApp, {IUser} from './../model/IApp'
import IAction from './../model/IAction'
import * as types from './constants';

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
        isFetching: false,
        isOpen: false,
        data: []
    },
    showPanel: true,
    page: localStorage.getItem('token') && localStorage.getItem('token') !== undefined ? "chat" : "login"
};

export function reducer (state: IApp = initialState, action: IAction): IApp {
    switch(action.type) {
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
        case types.FETCH_CHATS_DONE:
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    data: action.payload,
                    isFetching: false,
                }
            };
        case types.FETCH_MESSAGES:
            return {
                ...state,
                chat: {
                    ...state.chat,
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
            return {
                ...state,
                chat: {
                    ...state.chat,
                    data: [...(state.chat.data || []), action.payload.message]
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
        default:
            return state;
    }
} 
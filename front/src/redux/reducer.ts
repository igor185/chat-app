import IApp, {IUser} from './../model/IApp'
import IAction from './../model/IAction'
import * as types from './constants';

const initialState: IApp = {
    chatList: {
        data: null,
        isFetching: false
    },
    user: null as unknown as IUser,
    chat: {
        isFetching: false,
        isOpen: true,
        data: []
    },
    showPanel: true
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
            }
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
        default:
            return state;
    }
} 
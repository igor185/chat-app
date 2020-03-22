import IApp, {IUser} from './../model/IApp'
import IAction from './../model/IAction'
import * as types from './constants';

const initialState: IApp = {
    chatList: {
        data: [],
        isFetching: false
    },
    user: null as unknown as IUser,
    chat: {
        isFetching: false
    }
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
        case types.FETCH_CHATS_DONE:
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    data: action.payload,
                    isFetching: false
                }
            };
        case types.FETCH_MESSAGES:
            return {
                ...state,
                chat: {
                    ...state.chat,
                    isFetching: true
                }
            }
        default:
            return state;
    }
} 
import IApp, {IUser} from './../model/IApp'
import IAction from './../model/IAction'
import * as types from './constants';

const initialState: IApp = {
    chats: [],
    user: null as unknown as IUser
};

export function reducer (state: IApp = initialState, action: IAction): IApp {
    switch(action.type) {
        case types.FETCH_CHATS_DONE:
            return {
                ...state,
                chats: action.payload.chats
            };

        default:
            return state;
    }
} 
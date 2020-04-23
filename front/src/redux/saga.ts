import {takeLatest, put} from "redux-saga/effects";
import * as types from "./constants";
import {CHAT_LIST, CHAT_MESSAGES} from "../var/routers";

function* fetchChats(action: any) {
    try {
        let res = yield fetch(CHAT_LIST);
        res = yield res.json();
        yield put({type: types.FETCH_CHATS_DONE, payload: res})
    } catch (e) {
        console.log(e);
    }
}

function* fetchMessages(action: any) {
    try {
        let res = yield fetch(CHAT_MESSAGES + action.payload.id);
        res = yield res.json();
        yield put({type: types.FETCH_MESSAGES_DONE, payload: res})
    } catch (e) {
        console.log(e);
    }
}

export function* watchSaga() {
    yield takeLatest(types.FETCH_CHATS, fetchChats);
    yield takeLatest(types.FETCH_MESSAGES, fetchMessages);
}
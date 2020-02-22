import { takeLatest, put } from "redux-saga/effects";
import * as types from "./constants";

function* fetchChats(action: any) {
    try{
        let url = '/api/chat-list';
        let res = yield fetch(url);
        res = yield res.json();
        yield put({type: types.FETCH_CHATS_DONE, payload: { ...res }})
    }catch (e) {
        console.log(e);
    }
}

export function* watchSaga() {
    yield takeLatest(types.FETCH_CHATS, fetchChats);
}
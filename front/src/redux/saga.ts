import {takeLatest, put} from "redux-saga/effects";
import * as types from "./constants";
import * as url from "../var/routers";
import {fetchHeaderConfig} from "../helpers";
import axios from 'axios';

function* fetchChats(action: any) {
    try {
        let res = yield fetch(url.CHAT_LIST, { headers: fetchHeaderConfig().headers });
        res = yield res.json();
        yield put({type: types.FETCH_CHATS_DONE, payload: res})
    } catch (e) {
        console.log(e);
    }
}

function* fetchMessages(action: any) {
    try {
        let res = yield fetch(url.CHAT_MESSAGES + action.payload.id, { headers: fetchHeaderConfig().headers});
        res = yield res.json();
        yield put({type: types.FETCH_MESSAGES_DONE, payload: res})
    } catch (e) {
        console.log(e);
    }
}

function* loginUser(action: any) {

    try{
        let res = yield fetch(url.LOGIN, {
            method: "POST",
            body: JSON.stringify({
                username: action.payload.login,
                password: action.payload.password
            }),
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        });
        res = yield res.json();
        localStorage.setItem('token', res.token);
        yield put({
            type: types.CHANGE_PAGE,
            payload: "chat"
        })
    }catch (e) {
        console.log(e);
    }
}

function* fetchUser(action: any) {
    try{
        let res = yield fetch(url.USER, {
            method: "GET",
            headers: fetchHeaderConfig().headers
        });
        res = yield res.json();

        yield put({
            type: types.FETCH_USER_DONE,
            payload: {
                user: res
            }
        })
    }catch (e) {
        console.error(e);
        localStorage.removeItem('token');
        yield put({
            type: types.REMOVE_STORE
        })
    }
}

function* regUser(action: any){
    const { login, password, avatar } = action.payload;
    try{
        let res = yield axios({
            method: "POST",
            url: url.REG,
            data: {
                username: login,
                password,
                avatar
            }
        })
        console.log(res);

        res = yield res.json();

        console.log(res);
    }catch (e) {
        console.error(e);
    }
}

export function* watchSaga() {
    yield takeLatest(types.FETCH_CHATS, fetchChats);
    yield takeLatest(types.FETCH_MESSAGES, fetchMessages);
    yield takeLatest(types.LOGIN, loginUser);
    yield takeLatest(types.FETCH_USER, fetchUser);
    yield takeLatest(types.REG, regUser);
}
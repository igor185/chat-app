import {takeLatest, put} from "redux-saga/effects";
import * as types from "./constants";
import * as url from "../var/routers";
import {fetchHeaderConfig} from "../helpers";
import axios from 'axios';
import request from "../helpers/webApi";

function* fetchChats(action: any) {
    try {
        const res = yield request(url.CHAT_LIST, { headers: fetchHeaderConfig().headers });
        yield put({type: types.FETCH_CHATS_DONE, payload: res})
    } catch (e) {
        console.log(e);
    }
}

function* fetchMessages(action: any) {
    try {
        const res = yield request(url.CHAT_MESSAGES + action.payload.id, { headers: fetchHeaderConfig().headers});
        yield put({type: types.FETCH_MESSAGES_DONE, payload: res})
    } catch (e) {
        console.log(e);
    }
}

function* loginUser(action: any) {

    try{
        const res = yield request(url.LOGIN, {
            method: "POST",
            body: JSON.stringify({
                username: action.payload.login,
                password: action.payload.password
            }),
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        });
        localStorage.setItem('token', res.token);
        yield put({
            type: types.CHANGE_PAGE,
            payload: "chat"
        })
    }catch (e) {
        yield put({
            type: types.LOGIN_FAIL
        });
        console.error(e);
    }
}

function* fetchUser(action: any) {
    try{
        const res = yield request(url.USER, {
            method: "GET",
            headers: fetchHeaderConfig().headers
        });

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
        // TODO doesn't work with fetch, even if hard-code correct content-type
        const res = yield axios({
            method: "POST",
            url: url.REG,
            data: {
                username: login,
                password,
                avatar
            }
        });
        yield put({
            type: types.LOGIN,
            payload: {
                login, password
            }
        })
    }catch (error) {
        yield put({
            type: types.REG_FAIL,
            payload: { error: error.message }
        });
        console.error(error);
    }
}

export function* watchSaga() {
    yield takeLatest(types.FETCH_CHATS, fetchChats);
    yield takeLatest(types.FETCH_MESSAGES, fetchMessages);
    yield takeLatest(types.LOGIN, loginUser);
    yield takeLatest(types.FETCH_USER, fetchUser);
    yield takeLatest(types.REG, regUser);
}
import {takeLatest, put} from "redux-saga/effects";
import * as types from "./constants";
import * as url from "../var/routers";
import {fetchHeaderConfig} from "../helpers";
import request from "../helpers/webApi";
import {NotificationManager} from "react-notifications";

function* fetchChats(action: any) {
    try {
        const res = yield request(url.CHAT_LIST);
        yield put({type: types.FETCH_CHATS_DONE, payload: res})
    } catch (e) {
        console.log(e);
    }
}

function* fetchMessages(action: any) {
    try {
        const res = yield request(url.CHAT_MESSAGES + action.payload.id, {headers: fetchHeaderConfig().headers});
        yield put({type: types.FETCH_MESSAGES_DONE, payload: res})
    } catch (e) {
        console.log(e);
    }
}

function* loginUser(action: any) {

    try {
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
    } catch (e) {
        yield put({
            type: types.LOGIN_FAIL,
            payload: {error: e.message}
        });
        console.error(e);
    }
}

function* fetchUser(action: any) {
    try {
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
    } catch (e) {
        localStorage.removeItem('token');
        yield put({
            type: types.REMOVE_STORE
        })
    }
}

function* regUser(action: any) {
    const {login, password, avatar} = action.payload;
    try {
        yield request(url.REG, {
            method: "POST",
            body: JSON.stringify({
                username: login,
                password,
                avatar
            })
        });
        yield put({
            type: types.LOGIN,
            payload: {
                login, password
            }
        })
    } catch (error) {
        yield put({
            type: types.REG_FAIL,
            payload: {error: error.message}
        });
    }
}

function* search(action: any) {
    try {
        const res = yield request(url.SEARCH + `?search=${action.payload.search}`);
        yield put({
            type: types.SEARCH_DONE,
            payload: res
        })
    } catch (e) {
        console.error(e);
    }
}

function* newChat(action: any) {
    try {
        const res = yield request(url.NEW_CHAT, {
            method: "PUT",
            body: JSON.stringify({
                userId: action.payload.userId
            })
        });
        yield put({
            type: types.CREATE_CHAT_DONE,
            payload: {
                chatId: res.chatId
            }
        })
    } catch (e) {
        console.error(e);
    }
}

function* deleteMessage(action: any) {
    try {
        yield request(url.DELETE_MESSAGE + `/${action.payload.messageId}`, {
            method: "DELETE",
            body: JSON.stringify({
                chatId: action.payload.chatId
            })
        });
    } catch (e) {
        console.log(e)
    }
}

function* editMessage(action: any) {
    try {
        yield request(url.DELETE_MESSAGE + `/${action.payload.messageId}`, {
            method: "POST",
            body: JSON.stringify({
                chatId: action.payload.chatId,
                message: action.payload.message
            })
        });
    } catch (e) {
        console.log(e)
    }
}

function* updateAvatar(action: any) {
    try {
        const res = yield request(url.UPDATE_AVATAR, {
            method: "POST",
            body: JSON.stringify({
                src: action.payload.src
            })
        });
        if (res) {
            yield put({
                type: types.UPDATE_AVATAR_DONE,
                payload: {
                    src: res
                }
            })
        }
    } catch (e) {
        console.log(e);
    }
}

function* updateAbout(action: any) {
    try {
        const res = yield request(url.UPDATE_ABOUT, {
            method: "POST",
            body: JSON.stringify({
                message: action.payload.message
            })
        });
        yield put({
            type: types.UPDATE_ABOUT_DONE,
            payload: {
                message: res
            }
        })
    } catch (e) {
        console.log(e);
    }
}

function* updateEmail(action: any) {
    try {
        const res = yield request(url.UPDATE_EMAIL, {
            method: "POST",
            body: JSON.stringify({
                email: action.payload.email
            })
        });
        yield put({
            type: types.UPDATE_EMAIL_DONE,
            payload: {
                email: res
            }
        })
    } catch (e) {
        console.log(e);
    }
}

function* confirmMessage(action: any) {
    try {
        const res = yield request(url.CONFIRM_EMAIL, {
            method: "POST",
            body: JSON.stringify({
                email: action.payload.email
            })
        });
        if (res) {
            NotificationManager.info("Confirm email send");
        }
    } catch (e) {
        console.log(e);
    }
}

function* sendOptions(action: any) {
    try {
        const res = yield request(url.SEND_OPTIONS, {
            method: "POST",
            body: JSON.stringify({
                ...action.payload.options
            })
        });
        if (res) {
            yield put({
                type: types.SEND_OPTIONS_DONE,
                payload: {
                    options: action.payload.options
                }
            })
        }
    } catch (e) {
        console.log(e);
    }
}

function* sendEmail(action: any){
    try{
        yield request(url.SEND_EMAIL, {
            method: "POST",
            body: JSON.stringify({
                messageId: action.payload.message.id
            })
        });
        NotificationManager.info("Email was send");
    }catch (e) {
        console.log(e);
        NotificationManager.error("Something go wrong with email");
    }
}

export function* watchSaga() {
    yield takeLatest(types.FETCH_CHATS, fetchChats);
    yield takeLatest(types.FETCH_MESSAGES, fetchMessages);
    yield takeLatest(types.LOGIN, loginUser);
    yield takeLatest(types.FETCH_USER, fetchUser);
    yield takeLatest(types.REG, regUser);
    yield takeLatest(types.SEARCH, search);
    yield takeLatest(types.CREATE_CHAT, newChat);
    yield takeLatest(types.DELETE_MESSAGE, deleteMessage);
    yield takeLatest(types.EDIT_MESSAGE, editMessage);
    yield takeLatest(types.UPDATE_AVATAR, updateAvatar);
    yield takeLatest(types.UPDATE_ABOUT, updateAbout);
    yield takeLatest(types.UPDATE_EMAIL, updateEmail);
    yield takeLatest(types.SEND_CONFIRM_MESSAGE, confirmMessage);
    yield takeLatest(types.SEND_OPTIONS, sendOptions);
    yield takeLatest(types.SEND_EMAIL, sendEmail);
}
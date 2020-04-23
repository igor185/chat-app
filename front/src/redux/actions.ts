import * as types from "./constants";
export const fetchChats = () => ({
    type: types.FETCH_CHATS
});

export const fetchMessages = (chatId: number) => ({
    type: types.FETCH_MESSAGES,
    payload: {
        id: chatId
    }
});

export const togglePanel = () => ({
    type: types.TOGGLE_PANEL
});

// const prefix = "https://igor-babin-chat-java.herokuapp.com";
const prefix = "http://localhost:8080";


export const SOCKET_URL = `${prefix}/ws`;
export const CHAT_LIST = `${prefix}/api/chats`;
export const CHAT_MESSAGES = `${prefix}/api/chat/`;
export const LOGIN = `${prefix}/api/auth/login`;
export const USER = `${prefix}/api/me`;
export const REG = `${prefix}/req`;
export const SEARCH = `${prefix}/api/users`;
export const NEW_CHAT = `${prefix}/api/chat`;
export const DELETE_MESSAGE = `${prefix}/api/message`;
export const UPLOAD_FILE = `${prefix}/api/uploadFile`;
export const UPDATE_AVATAR = `${prefix}/api/user/avatar`;
export const UPDATE_ABOUT = `${prefix}/api/user/about`;
export const UPDATE_EMAIL = `${prefix}/api/user/email`;
export const CONFIRM_EMAIL = `${prefix}/api/email/confirm`;
export const CONFIRM_EMAIL_DONE = `${prefix}/api/user/confirm`;
export const SEND_OPTIONS = `${prefix}/api/user/options`;
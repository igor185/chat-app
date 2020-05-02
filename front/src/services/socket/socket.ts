import SockJS from "sockjs-client";
import Stomp, {Client} from 'stompjs';
import * as actions from "../../redux/actions";
import * as url from '../../var/routers'
import IApp, {IMessage, IUser} from "../../model/IApp";

let stompClient = {} as Client;



const connect = (action: typeof actions, store: IApp) => {
    if(stompClient.connected){
        console.log("already connected");
        return;
    }


    const user = store.user.data as IUser;


    // null, {headers: { 'Authorization': 'Basic '+localStorage.getItem('token')}})
    // @ts-ignore
    stompClient = Stomp.over(new SockJS(url.SOCKET_URL));

    stompClient.connect({ 'user': user.id }, () => {
        console.log('Connected', store.user);



        stompClient.subscribe(`/res/new-message/${user.id}`, ({ body }) => action.newMessage(JSON.parse(body)));

        stompClient.subscribe(`/res/new-chat/${user.id}`, ({ body }: { body: string}) => {
            const newChat: { chatId: number, user1: IUser, user2: IUser} = JSON.parse(body);

            action.addChatToList(newChat.chatId, newChat.user1.id === user.id ? newChat.user2 : newChat.user1, user.id === newChat.user1.id);

        });

        stompClient.subscribe(`/res/delete-message/${user.id}`, ({ body }: { body: string}) => {
            const message: IMessage = JSON.parse(body);

            action.deleteMessageDone(message);
            action.fetchChats();
        });

        stompClient.subscribe(`/res/edit-message/${user.id}`, ({ body }: { body: string}) => {
            const message: IMessage = JSON.parse(body);

            action.editMessageDone(message);
            action.fetchChats();
        });

        stompClient.subscribe(`/res/new-typing/${user.id}`, ({body} : {body: string}) => {
            const { chatId } : {chatId: number} = JSON.parse(body);

            action.newTypingMessage(chatId)
        });

        stompClient.subscribe('/res/online', ({body} : {body: string}) => {
            const userId = JSON.parse(body);
            action.onlineUser(userId, true);
        });

        stompClient.subscribe('/res/offline', ({body} : {body: string}) => {
            const userId = JSON.parse(body);
            action.onlineUser(userId, false);
        });

        stompClient.subscribe('/res/chat-read/'+user.id, ({body} : {body: string}) => {
            const chatId = JSON.parse(body);
            action.setReadMessage(chatId);
        });
    });


};

const send = (destination: string, headers?: {}, body?: string) => {
    return stompClient.send(destination, headers, body);
};

export default {
    stompClient,
    send,
    connect
};
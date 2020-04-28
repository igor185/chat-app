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

    stompClient = Stomp.over(new SockJS(url.SOCKET_URL));
    stompClient.connect({}, () => {
        console.log('Connected', store.user);



        stompClient.subscribe(`/res/new-message/${user.id}`, ({ body }) => action.newMessage(JSON.parse(body)));

        stompClient.subscribe(`/res/new-chat/${user.id}`, ({ body }: { body: string}) => {
            const newChat: { chatId: number, user1: IUser, user2: IUser} = JSON.parse(body);

            action.addChatToList(newChat.chatId, newChat.user1.id === user.id ? newChat.user1 : newChat.user2);

        });

        stompClient.subscribe(`/res/delete-message/${user.id}`, ({ body }: { body: string}) => {
            console.log(body);
            const message: IMessage = JSON.parse(body);

            console.log(message);

            action.deleteMessageDone(message);
        })
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
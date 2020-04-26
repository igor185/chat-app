import SockJS from "sockjs-client";
import Stomp from 'stompjs';
import * as actions from "../../redux/actions";
import * as url from '../../var/routers'

const stompClient = Stomp.over(new SockJS(url.SOCKET_URL));


const connect = (action: typeof actions) => {
    stompClient.connect({}, () => {
        console.log('Connected');
        stompClient.subscribe('/res/new-message', ({ body }) => action.newMessage(JSON.parse(body)));
    });
};

export default {
    ...stompClient,
    send: stompClient.send.bind(stompClient),
    connect
};
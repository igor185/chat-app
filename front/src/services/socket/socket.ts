import SockJS from "sockjs-client";
import Stomp from 'stompjs';
import * as actions from "../../redux/actions";

const stompClient = Stomp.over(new SockJS('http://localhost:8080/ws'));


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
import React from 'react';
import {Form, Input} from 'semantic-ui-react'
import socket from "../../../services/socket/socket";


export const MessageInput = () => {
    const sendMessage = (message: string) => {
        socket.send('/req/new-message', {}, JSON.stringify({
            chatId: 4,
            userId: 1,
            message
        }))
    };
    return <Form onSubmit={(e) => sendMessage(e.currentTarget.getElementsByTagName("input")[0].value)}>
        <Input placeholder='Type a message...' fluid/>
    </Form>
};



export default MessageInput;
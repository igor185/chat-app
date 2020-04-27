import React, {useState} from 'react';
import {Form, Input} from 'semantic-ui-react'
import socket from "../../../services/socket/socket";
import IApp from "../../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../../redux/actions";
import {connect} from "react-redux";


export const MessageInput = (props: any) => {
    const [value, setValue] = useState("");
    const sendMessage = () => {
        if(!value)
            return;
        socket.send('/req/new-message', {}, JSON.stringify({
            chatId: props.chat.id,
            userId: props.user.data.id,
            message: value
        }));
        setValue("");
    };
    return <Form onSubmit={(e) => sendMessage()}>
        <Input placeholder='Type a message...' fluid value={value} onChange={(e, data) => setValue(data.value)}/>
    </Form>
};



const mapStateToProps = (state: IApp): any => ({
    user: state.user,
    chat: state.chat
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageInput);
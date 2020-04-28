import MessageItem from "./MessageItem";
import React from "react";
import {IChatList, IMessage, IMessageView, IUser} from "../../model/IApp";


export const MessageList = (props: { chat: IChatList, user: IUser}) => {
    // @ts-ignore
    return <> {(props.chat.data || []).map((elem: IMessage) => <MessageItem key={elem.id} message={elem} user={props.user}/>) }</>
};



export default MessageList;
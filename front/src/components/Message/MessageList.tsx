import MessageItem from "./MessageItem";
import React from "react";


export const MessageList = (props: any) => {
    return <> {props.chat.data.map((elem: any) => <MessageItem {...elem as any}/>) }</>
};



export default MessageList;
import MessageItem from "./MessageItem";
import React from "react";


export const MessageList = () => {



    return <> {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(elem => <MessageItem {...elem as any}/>) }</>
};



export default MessageList;
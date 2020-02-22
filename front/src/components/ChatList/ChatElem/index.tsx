import React from 'react';
import "./styles.sass"
export interface IChatElem {
    id: number;
    name: string;
    date: string;
    message: string;
}

const ChatElem = (props: IChatElem) => {
    const {name, date, message} = props;
    return (
        <div className="chat-elem-wrap">
            <div className="first-line">
                <div className="name-wrap">{name}</div>
                <div className="date-wrap">{date}</div>
            </div>
            <div className="second-line">
                <div className="message-wrap">{message}</div>
            </div>
        </div>
    )
};


export default ChatElem;
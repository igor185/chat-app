import React from 'react';
import "./styles.sass"
import {Comment, Image} from "semantic-ui-react";
import {fromNow} from "../../../helpers";
import EllipsisText from "react-ellipsis-text";

export interface IChatElem {
    id: number;
    name: string;
    date: string;
    message: string;
    onClick: (id: number) => void;
}

const ChatElem = (props: any) => {
    const {name, date, message, id, avatar} = props;
    return (
        <div className={`chat-elem-wrap ${props.chatId === id ? 'toggled' : ""}`} onClick={() => props.onClick(id)}>
            <div className="avatar">
                <Image avatar src={avatar}/>
            </div>
            <div className="info">
                <div className="name-wrap">
                    <div className="name">{name}</div>
                    <div className="date">{fromNow(date)}</div>
                </div>
                <EllipsisText text={message ? message.message : ""} length={21}/>
            </div>
        </div>
    )
};


export default ChatElem;
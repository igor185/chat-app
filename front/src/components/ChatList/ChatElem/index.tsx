import React from 'react';
import "./styles.sass"
import {Image} from "semantic-ui-react";
import {fromNow} from "../../../helpers";
import EllipsisText from "react-ellipsis-text";

export interface IChatElem {
    id: number;
    name: string;
    date: string;
    message: string;
    onClick: () => void;
}

const ChatElem = (props: any) => {
    const {name, date, message, id, avatar, show = false} = props;
    const text = message ? (message.message || (message.file ? <span className="file">file</span> : ""))   : "";
    return (
        <div className={`chat-elem-wrap ${props.chatId === id ? 'toggled' : ""}`} onClick={() => props.onClick()}>
            <div className="avatar">
                <Image avatar src={avatar}/>
            </div>
            <div className="info">
                <div className="name-wrap">
                    <div className="name">{name}</div>
                    <div className="date">{date && fromNow(date)}</div>
                </div>
                {!show && typeof text === "string"? (<EllipsisText text={text} length={21}/>) : text}
            </div>
        </div>
    )
};


export default ChatElem;
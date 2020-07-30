import React, {useEffect, useState} from 'react';
import "./styles.sass"
import {fromNow} from "../../../helpers";
import EllipsisText from "react-ellipsis-text";
import Typing from "../../Message/Input/Typing";
import Avatar from '../../AvatarWrapper'
import TimeAgo from 'react-timeago'

export interface IChatElem {
    id: number;
    name: string;
    date: string;
    message: string;
    onClick: () => void;
}


const ChatElem = (props: any) => {
    const {name, date, message, id, avatar, show = false, typing, timeTyping, online} = props;

    const [time, setTime] = useState(timeTyping);
    const [timer, setTimer] = useState<any>(null);

    useEffect(() => {
        setTime(timeTyping);
        if (timer) {
            clearTimeout(timer);
        }
        const newTimer = setTimeout(() => {
            props.actions && props.actions.setTyping(id, false, null);
        }, 3000);
        setTimer(newTimer);
    }, [timeTyping]);


    const text = message ? (message.message || (message.file ? <span className="file">file</span> : "")) : "";
    return (
        <div className={`chat-elem-wrap ${props.chatId === id ? 'toggled' : ""}`} onClick={() => props.onClick()}>
            <div className="avatar">
                <Avatar src={avatar} height={35} width={35} online={online} unread={props.unread}/>
            </div>
            <div className="info">
                <div className="name-wrap">
                    <div className="name"><EllipsisText text={name} length={10}/></div>
                    <div className="date"><TimeAgo date={date} /></div>
                </div>
                {typing ? <Typing /> : !show && typeof text === "string" ? (
                    <EllipsisText text={text} length={20}/>) : text}
            </div>
        </div>
    )
};


export default ChatElem;
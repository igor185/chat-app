import React from 'react';
import "./styles.sass"
import {Comment} from "semantic-ui-react";
import {fromNow} from "../../../helpers";

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
        <div className="chat-elem-wrap" onClick={() => props.onClick(id)}>
            <Comment.Group>
                <Comment>
                    <Comment.Avatar src={avatar} />
                    <Comment.Content>
                        <Comment.Author as='a'>{name}</Comment.Author>
                        <Comment.Metadata>
                            <div>{fromNow(date)}</div>
                        </Comment.Metadata>
                        <Comment.Text>{message ? message.message : ""}</Comment.Text>
                    </Comment.Content>
                </Comment>
                </Comment.Group>
        </div>
    )
};


export default ChatElem;
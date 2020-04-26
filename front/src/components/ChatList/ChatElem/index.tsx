import React from 'react';
import "./styles.sass"
import {Comment} from "semantic-ui-react";

export interface IChatElem {
    id: number;
    name: string;
    date: string;
    message: string;
    onClick: (id: number) => void;
}

const ChatElem = (props: any) => {
    const {name, date, message, id} = props;
    return (
        <div className="chat-elem-wrap" onClick={() => props.onClick(id)}>
            <Comment.Group>
                <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>{name}</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>{message ? message.message : ""}</Comment.Text>
                    </Comment.Content>
                </Comment>
                </Comment.Group>
        </div>
    )
};


export default ChatElem;
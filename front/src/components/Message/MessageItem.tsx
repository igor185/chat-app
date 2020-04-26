import {Comment} from "semantic-ui-react";
import React from "react";
import {IMessage} from "../../model/IApp";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);


export const MessageItem = (props: IMessage) => {
    return (<Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'/>
        <Comment.Content>
            <Comment.Author as='a'>{props.user.username}</Comment.Author>
            <Comment.Metadata>
                <div>{dayjs(props.time).fromNow()}</div>
            </Comment.Metadata>
            <Comment.Text>{props.message}</Comment.Text>
            <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
    </Comment>)
};



export default MessageItem;
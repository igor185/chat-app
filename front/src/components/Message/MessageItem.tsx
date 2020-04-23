import {Comment} from "semantic-ui-react";
import React from "react";


export const MessageItem = () => {


    return (<Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'/>
        <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
                <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
    </Comment>)
};



export default MessageItem;
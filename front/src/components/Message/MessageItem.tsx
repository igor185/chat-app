import {Button, Header, Icon, Image, Modal} from "semantic-ui-react";
import React, {useState} from "react";
import IApp, {IMessage, IMessageView, IUser} from "../../model/IApp";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import './styles.sass'
import {fromNow} from "../../helpers";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../../redux/actions";
dayjs.extend(relativeTime);


export const MessageItem = (props: { user: IUser, message: IMessage, actions: typeof Actions}) => {
    const { message, user, actions } = props;
    const fromMe = message.user.id === user.id;

    const [openDelete, setClose] = useState(false);

    const onDelete = () => {
        setClose(false);
        actions.deleteMessage(message.id, message.chat.id);
    };
    return (
        <div className={`message-item ${openDelete ? "to-delete" : ""}`} style={{ alignItems: fromMe ? "flex-end" : "flex-start"}}>
        <p className={fromMe ? "from-me" : "from-them"}>
            {message.message}
            <span className="info-block">
                <span className={"time"}>{fromNow(message.time)}</span>
                {fromMe && (<span className={"icons"}>
                    <Modal
                        trigger={ <Icon name={"trash"} size={"small"} onClick={() => setClose(true)}/>}
                        open={openDelete}
                        onClose={() => setClose(false)}
                        basic
                        size='small'
                    >
                    <Modal.Content>
                      <Header as={'h3'} textAlign='center' className={"white-header"}>Are you sure you want to delete the message?</Header>
                    </Modal.Content>
                    <Modal.Actions className={"action-btn"}>
                      <Button color='red' onClick={onDelete} inverted>
                        <Icon name='trash' /> Delete
                      </Button>
                        <Button color='green' onClick={() => setClose(false)} inverted>
                        <Icon name='cancel' /> Cancel
                      </Button>
                    </Modal.Actions>
                  </Modal>
                    <Icon name={"edit"} size={"small"}/>
                </span>)}
            </span>
        </p>
            <Image avatar src={message.user.avatar}/>
        </div>
    //     <Comment>
    //     <Comment.Avatar src={props.user.avatar}/>
    //     <Comment.Content>
    //         <Comment.Author as='a'>{props.user.username}</Comment.Author>
    //         <Comment.Metadata>
    //             <div>{fromNow(props.time)}</div>
    //         </Comment.Metadata>
    //         <Comment.Text>{props.message}</Comment.Text>
    //         <Comment.Actions>
    //             <Comment.Action>Reply</Comment.Action>
    //         </Comment.Actions>
    //     </Comment.Content>
    // </Comment>
    )
};


const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(Actions, dispatch)
});
export default connect(
    () => ({}),
    mapDispatchToProps
)(MessageItem);
import {Button, Form, Header, Icon, Image, Message, Modal, TextArea} from "semantic-ui-react";
import React, {useState} from "react";
import {IMessage, IUser} from "../../model/IApp";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import './styles.sass'
import {fromNow, humanFileSize} from "../../helpers";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../../redux/actions";
import ReactHtmlParser from 'react-html-parser';

dayjs.extend(relativeTime);


export const MessageItem = (props: { user: IUser, message: IMessage, actions: typeof Actions }) => {
    const {message, user, actions} = props;
    const fromMe = message.user.id === user.id;

    const [openDelete, setClose] = useState(false);
    const [openEdit, setCloseEdit] = useState(false);
    const [messageEdit, changeMessage] = useState<any>(message.message);

    const onDelete = () => {
        setClose(false);
        actions.deleteMessage(message.id, message.chat.id);
    };

    const onEdit = () => {
        setCloseEdit(false);
        actions.editMessage(message.id, message.chat.id, messageEdit);
    };

    const getJustifyContent = () => fromMe ? "space-between" : user.options.sendMessage ? "space-between" : "flex-end";
    const sendMessage = () => props.actions.sendEmail(message);
    return (
        <div className={`message-item ${openDelete ? "to-delete" : ""} ${openEdit ? "to-edit" : ""}`}
             style={{alignItems: fromMe ? "flex-end" : "flex-start"}}>
            <p className={fromMe ? "from-me" : "from-them"}>
                {message.file && (
                        message.file.fileType.indexOf('image') === -1 ? (
                            <Message icon compact size={"mini"} info>
                                <Icon name='file'
                                      onClick={() => message.file && window.open(message.file.fileDownloadUri, '_blank')}/>
                                <Message.Content>
                                    <Message.Header>{message.file && message.file.fileName}</Message.Header>
                                    {message.file && humanFileSize(message.file.size)}
                                </Message.Content>
                            </Message>) :
                            <>
                                <div style={{ marginBottom: 10 }}>
                            <Image src={message.file.fileDownloadUri}
                                   size='medium'
                                   wrapped
                                   as={'a'}
                                   href={message.file.fileDownloadUri}
                                   target='_blank'/>
                                </div>
                            </>

                   )}
                <div style={{ whiteSpace: "pre-wrap" }}>{ReactHtmlParser(message.message)}</div>
                <span className="info-block" style={{ justifyContent: getJustifyContent() }}>
                    {!fromMe && user.confirm && user.options.sendMessage && <span><Icon name={"mail"} size={"small"} onClick={sendMessage}/></span>}
                <span className={"time"}>{fromNow(message.time)}</span>
                    {fromMe && (<span className={"icons"}>
                        {user.confirm && user.options.sendMessage && <Icon name={"mail"} size={"small"} onClick={sendMessage}/>}
                    <Modal
                        trigger={<Icon name={"trash"} size={"small"} onClick={() => setClose(true)}/>}
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
                        <Icon name='trash'/> Delete
                      </Button>
                        <Button color='green' onClick={() => setClose(false)} inverted>
                        <Icon name='cancel'/> Cancel
                      </Button>
                    </Modal.Actions>
                  </Modal>
                     <Modal
                         trigger={<Icon name={"edit"} size={"small"} onClick={() => setCloseEdit(true)}/>}
                         open={openEdit}
                         onClose={() => setCloseEdit(false)}
                         basic
                         size='small'
                     >
                    <Modal.Content>
                      <Header as={'h3'} textAlign='center' className={"white-header"}>Edit message</Header>
                        <Form>
                            <TextArea
                                value={messageEdit}
                                onChange={(e, data) => changeMessage(data.value)}
                                style={{minHeight: 200}}
                            />
                        </Form>
                    </Modal.Content>
                    <Modal.Actions className={"action-btn"}>
                      <Button color='green' onClick={onEdit} inverted>
                        <Icon name='edit'/> Edit
                      </Button>
                        <Button color='blue' onClick={() => setCloseEdit(false)} inverted>
                        <Icon name='cancel'/> Cancel
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </span>)}
            </span>
            </p>
            <Image avatar src={message.user.avatar}/>
        </div>
    )
};


const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(Actions, dispatch)
});
export default connect(
    () => ({}),
    mapDispatchToProps
)(MessageItem);
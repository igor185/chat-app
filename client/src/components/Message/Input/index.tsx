import React, {useEffect, useState} from 'react';
import {Button, Form, Header, Icon, Input, Message, Modal, TextArea} from 'semantic-ui-react'
import socket from "../../../services/socket/socket";
import IApp, {IFile} from "../../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../../redux/actions";
import {connect} from "react-redux";
import {uploadFile, humanFileSize, getImageHeight} from "../../../helpers";
import {NotificationManager} from "react-notifications";


export const MessageInput = (props: any) => {
    const [value, setValue] = useState<any>("");
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [file, setFile] = useState<IFile | null>(null);

    useEffect(() => {
        if (value) {
            props.actions.typingMessage(props.chat.id, props.chat.user.id);
        }
        // typing // send to another user !!!!!!!!!!!
    }, [value]);

    const handleUploadFile = async ({target}: any) => {
        if (target.files.length == 0) {
            return;
        }
        const height = target.files[0].type.indexOf("image") !== -1 ? await getImageHeight(target.files[0]) : 0;

        setOpenModal(true);
        setLoading(true);
        uploadFile(target.files[0], height)
            .then((file: IFile) => {
                setFile(file);
                setLoading(false);
            })
            .catch(console.log);
    };

    const sendMessage = () => {
        if (value.length > 255) {
            return NotificationManager.error("Too long");
        }

        setOpenModal(false);
        if (!value.trim() && !file)
            return;
        socket.send('/req/new-message', {}, JSON.stringify({
            chatId: props.chat.id,
            userId: props.user.data.id,
            message: value,
            file,
        }));
        setValue("");
        setFile(null);
    };


    return <Form onSubmit={(e) => sendMessage()} className={"input-wrapper"}>
        <Input placeholder='Type a message...' fluid value={value} onChange={(e, data) => setValue(data.value)}/>
        <Button color="teal" icon as="label">
            <Icon name="paperclip"/>
            <input name="image" type="file" onChange={handleUploadFile} hidden/>
        </Button>
        <Modal
            open={openModal}
            basic
            size='small'
        >
            <Modal.Content>
                <Header as={'h3'} textAlign='center' className={"white-header"}>Message with attached</Header>
                <Message icon>
                    {loading ? <Icon name='circle notched' loading/> :
                        <Icon name='file'/>}
                    <Message.Content>
                        <Message.Header>{file && file.fileName}</Message.Header>
                        {file && humanFileSize(file.size)}
                    </Message.Content>
                </Message>
                <Form>
                    <TextArea
                        value={value}
                        onChange={(e, data) => setValue(data.value)}
                        style={{minHeight: 200}}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions className={"action-btn"}>
                <Button color='green' inverted onClick={() => loading || sendMessage()}>
                    <Icon name='save' disabled={loading}/> Save
                </Button>
                <Button color='blue' inverted onClick={() => {
                    setOpenModal(false);
                    setFile(null)
                }}>
                    <Icon name='cancel'/> Cancel
                </Button>
            </Modal.Actions>
        </Modal>
    </Form>
};


const mapStateToProps = (state: IApp): any => ({
    user: state.user,
    chat: state.chat
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageInput);
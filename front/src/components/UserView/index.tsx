import React, {useEffect, useState} from 'react';
import IApp, {IOptions, IUser} from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import {Modal, Image, Header, Button, Icon, TextArea, Input, Popup, Checkbox} from "semantic-ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import Cropper from "../Cropper";
import { isEqual } from 'lodash';

import './styles.sass';
import {NotificationManager} from "react-notifications";

export interface IProps {
    close: boolean;
    setClose: (status: boolean) => void;
    actions: typeof actions
    user: IUser
    userStore?: IUser
    onLogOut: () => void
    isEdit: boolean
}

const UserView = (props: IProps) => {
    const user = props.user;
    const [crop, setCropper] = useState(false);


    const [editAbout, setEditAbout] = useState(false);
    const [editValue, setEditValue] = useState<any>(user.about);
    const closeEditAbout = () => {
        setEditValue(user.about);
        setEditAbout(false);
    };
    const changeAbout = () => {
        if(editValue.length > 255){
            return NotificationManager.error("Too big message");
        }
        props.actions.editAbout(editValue);
        closeEditAbout();
    };

    const sendConfirmLink = () => {
        props.actions.confirmEmail(user.email || "");
    };

    const [options, changeOptions] = useState<IOptions>({...user.options});

    const setOption = (name: string, value: boolean) => {
        changeOptions({
            ...options,
            [name]: value
            })
    };


    const [emailAbout, setEmailAbout] = useState(false);
    const [emailValue, setEmailValue] = useState<any>(user.email);
    const closeEmailAbout = () => {
        setEmailValue(user.email);
        setEmailAbout(false);
    };
    const changeEmail = () => {
        props.actions.editEmail(emailValue);
        closeEmailAbout();
    };

    const sendOptions = () => {
        props.actions.sendOptions(options);
    };

    useEffect(() => {
        if (emailAbout) {
            setEmailValue(user.email);
        }
    }, [emailAbout]);

    useEffect(() => {
        if (editAbout) {
            setEditValue(user.about);
        }
    }, [editAbout]);

    useEffect(() => {
        changeOptions(user.options);
    }, [user.options]);
    return (
        <Modal
            open={props.close}
            closeOnDimmerClick={true}
            onClose={() => props.setClose(false)}
            centered={false}
        >
            <Modal.Header as={'h1'}>
                <div className={"header-wrap-view"}>
                    {user.username}
                    {props.isEdit && <div className="icon-wrap" onClick={props.onLogOut}>
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                    </div>}
                </div>
            </Modal.Header>
            <Modal.Content>
                <div className="content-wrapper">
                    {crop ? (
                            <>
                                <Cropper
                                    onClose={(src?: string) => {
                                        setCropper(false);
                                        if (src) {
                                            props.actions.updateAvatar(src);
                                        }
                                    }}
                                />
                            </>
                        ) :
                        (<div className={"avatar"}>
                            <Image wrapped size='medium' src={user.avatar} circular/>
                            {props.isEdit &&
                            <Button color='blue' onClick={() => setCropper(true)}>Upload photo</Button>}
                        </div>)
                    }
                    <Modal.Description>
                        <Header as={'h4'}>Profile Info</Header>
                        <div className="key-value">
                            <div className="key">
                                About
                                {props.isEdit && (!editAbout ?
                                    <span onClick={() => setEditAbout(true)}><Icon name={'edit'}
                                                                                   color={"blue"}/></span> : (
                                        <>
                                            <span onClick={closeEditAbout}><Icon name={'window close outline'}
                                                                                 color={"blue"}/></span>
                                            <span onClick={changeAbout}><Icon name={'check'} color={"blue"}/></span>
                                        </>
                                    ))}
                            </div>
                            <div className="value">
                                {!props.isEdit || !editAbout ? user.about : (
                                    <TextArea
                                        value={editValue}
                                        onChange={(e, data) => setEditValue(data.value)}
                                        style={{minHeight: 100}}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="key-value">
                            <div className="key">
                                <div>
                                    Email
                                    {props.isEdit && (!emailAbout ?
                                        <span onClick={() => setEmailAbout(true)}><Icon name={'edit'}
                                                                                        color={"blue"}/></span> : (
                                            <>
                                                <span onClick={closeEmailAbout}><Icon name={'window close outline'}
                                                                                      color={"blue"}/></span>
                                                <span onClick={changeEmail}><Icon name={'check'} color={"blue"}/></span>
                                            </>
                                        ))}
                                </div>
                                <Header as={'h6'} color={user.confirm ? "green" : "red"}>{user.confirm ? 'confirm' : (
                                    props.isEdit && <Popup content='Click to send confirm email'
                                                           trigger={<span style={{marginLeft: 0}}
                                                                          onClick={sendConfirmLink}>no confirm</span>}/>
                                )}</Header>
                            </div>
                            <div className="value">
                                {!props.isEdit || !emailAbout ? user.email : (
                                    <Input value={emailValue} onChange={(e, data) => setEmailValue(data.value)}/>
                                )}
                            </div>
                        </div>
                        {props.isEdit && <div className={"notific-setting"}>
                            <Header as={'h4'}>Notification settings</Header>
                            {!user.confirm && <Header as={'h5'} color={"red"}>Works only when you confirm email</Header>}
                            <div className={"checkbox-wrap"}>
                                <Checkbox toggle checked={options.newChat} onChange={() => setOption('newChat', !options.newChat)} label={"New chat"}/>
                            </div>
                            <div className={"checkbox-wrap"}>
                                <Checkbox toggle checked={options.eachMessage} onChange={() => setOption('eachMessage', !options.eachMessage)} label={"Each new message"}/>
                            </div>
                            <div className={"checkbox-wrap"}>
                                <Checkbox toggle checked={options.sendMessage} onChange={() => setOption('sendMessage', !options.sendMessage)} label={"Option to send particular message to email"}/>
                            </div>
                            {isEqual(options, user.options) ? "" : <Button color='blue' onClick={sendOptions}>Save settings</Button>}
                        </div>}
                    </Modal.Description>
                </div>
            </Modal.Content>
        </Modal>
    )
};


const mapStateToProps = (state: IApp): any => ({
    userStore: state.user.data
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserView);
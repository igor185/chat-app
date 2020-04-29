import React, {useEffect, useState} from 'react';
import IApp, {IUser} from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import {Modal, Image, Header, Button} from "semantic-ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import Cropper from "../Cropper";

import './styles.sass';

export interface IProps {
    close: boolean;
    setClose: (status: boolean) => void;
    actions: typeof actions
    user: IUser
    onLogOut: () => void
    isEdit: boolean
}

const UserView = (props: IProps) => {
    const [crop, setCropper] = useState(false);
    const [avatar, setAvatar] = useState(props.user.avatar);
    const [user, setUser] = useState(props.user);

    useEffect(() => {
        setUser(props.user);
        setAvatar(props.user.avatar);
    }, [props.user]);
    return (
        <Modal
            open={props.close}
            closeOnDimmerClick={true}
            onClose={() => props.setClose(false)}
            centered={false}
        >
            <Modal.Header>
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
                                            if(src){
                                                props.actions.updateAvatar(src);
                                                setAvatar(src);
                                            }
                                        }}
                                    />
                            </>
                        ) :
                        (<div className={"avatar"}>
                            <Image wrapped size='medium' src={avatar} circular/>
                                {props.isEdit && <Button color='blue' onClick={() => setCropper(true)}>Upload photo</Button>}
                        </div>)
                    }
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                            We've found the following gravatar image associated with your e-mail
                            address.
                        </p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </div>
            </Modal.Content>
        </Modal>
    )
};


const mapStateToProps = (state: IApp): any => ({});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserView);
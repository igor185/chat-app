import React from 'react';
import IApp, {IUser} from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import {Modal, Image, Header} from "semantic-ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

export interface IProps {
    close: boolean;
    setClose: (status: boolean) => void;
    actions: typeof actions
    user: IUser
    onLogOut: () => void
    isEdit: boolean
}

const UserView = (props: IProps) => {
    return (
        <Modal
            open={props.close}
            closeOnDimmerClick={true}
            onClose={() => props.setClose(false)}
            centered={false}
        >
            <Modal.Header>
                <div className={"header-wrap-view"}>
                    {props.user.username}
                    {props.isEdit && <div className="icon-wrap" onClick={props.onLogOut}>
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                    </div>}
                </div>
            </Modal.Header>
            <Modal.Content image>
                <Image wrapped size='medium' src={props.user.avatar} circular/>
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                        We've found the following gravatar image associated with your e-mail
                        address.
                    </p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
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
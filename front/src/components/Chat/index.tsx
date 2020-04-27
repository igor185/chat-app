import React, {useEffect} from 'react';
import './styles.sass';
import Header from "../Header";
import ChatList from "../ChatList";
import ChatPage from "../ChatPage";
import IApp from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import socket from '../../services/socket/socket';
import {Dimmer, Loader} from "semantic-ui-react";

const Chat = (props: any) => {
    useEffect(() => {
        if(props.actions && props.user.data) {
            console.log('init');
            socket.connect(props.actions, props.state)
        }
    }, [props.actions, props.user]);

    useEffect(() => {
        props.actions.fetchUser();
    }, [props.actions]);
    return (
        props.user.data && !props.user.isFetching ? (
        <div className="main-wrapper">
            <div style={ {background: "white"} }>
                    <Header />
                <div className="content-wrap">
                    {props.showPanel &&
                    <ChatList {...props} />}
                    <ChatPage />
                </div>
            </div>
        </div>) : (
            <Dimmer active inverted>
                <Loader inverted />
            </Dimmer>
        )
    )
};

const mapStateToProps = (state: IApp): any => ({
    state,
    showPanel: state.showPanel,
    user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
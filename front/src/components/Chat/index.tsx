import React from 'react';
import './styles.sass';
import Header from "../Header";
import ChatList from "../ChatList";
import ChatPage from "../ChatPage";
import IApp from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";

const Chat = (props: any) => {
    console.log(props);
    return (
        <div className="main-wrapper">
            <div style={ {background: "white"} }>
                    <Header />
                <div className="content-wrap">
                    {props.showPanel &&
                    <ChatList {...props} />}
                    <ChatPage />
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state: IApp): any => ({
    showPanel: state.showPanel
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
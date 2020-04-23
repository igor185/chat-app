import React from 'react';
import {connect} from "react-redux";
import IApp from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {Header, Loader, Comment} from 'semantic-ui-react'
import './styles.sass'
import MessageInput from "../Message/Input";
import MessageList from "../Message/MessageList";


const ChatPage = (props: any) => {


    return (
        <div className="chat-page-wrapper">
            {props.chat.isOpen ? (
                props.chat.isFetching ?
                    (<div className="loader-wrap">
                        <Loader active inline='centered'/>
                    </div>) :
                    (
                        <>
                            <div className="messages-wrap">
                                <Comment.Group>
                                    <MessageList />
                                </Comment.Group>
                            </div>
                            <div className="input-wrap">
                                <MessageInput />
                            </div>
                        </>
                    )
            ) : (
                "close"
            )}
        </div>
    )
};


const mapStateToProps = (state: IApp): any => ({
    chat: state.chat
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatPage);

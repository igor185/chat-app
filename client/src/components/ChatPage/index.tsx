import React from 'react';
import {connect} from "react-redux";
import IApp from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {Header, Loader} from 'semantic-ui-react'
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

                                <MessageList
                                    chat={props.chat}
                                    user={props.user.data}
                                    actions={props.actions}/>
                            <div className="input-wrap">
                                <MessageInput/>
                            </div>
                        </>
                    )
            ) : (
                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column", height: "100%" }}>
                    <Header as={'h3'} textAlign={"center"}>
                        Select chat to start texting
                    </Header>
                </div>
            )}
        </div>
    )
};


const mapStateToProps = (state: IApp): any => ({
    chat: state.chat,
    user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatPage);

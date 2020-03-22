import ChatElem from "./ChatElem";
import React, {useEffect} from "react";
import "./styles.sass";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import IApp, {IChatList, IChatView} from "../../model/IApp";

const mapStateToProps = (state: IApp): any => ({
    chatList: state.chatList,
    chat: state.chat
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});

interface IChatListProps {
    actions: typeof actions;
    chatList: IChatList;
    chat: IChatView
}

const ChatList = (props: IChatListProps) => {
    useEffect(() => {
        props.actions.fetchChats();
    }, [props.actions]);

    const showChatList = () => {
        return true;
    };

    return (
        <>
            {showChatList() ? (<div className="chat-list-wrap">
                {props.chatList.data.map(elem => <ChatElem key={elem.id} id={elem.id} name={elem.user.name}
                                                           date={elem.time} message={elem.message}
                                                           onClick={(id) => props.actions.fetchMessages(elem.chat.id)}/>)}
            </div>) : null}
            {"Fetching = " + props.chat.isFetching}
        </>
    )
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList);
import ChatElem from "./ChatElem";
import React, {useEffect} from "react";
import "./styles.sass";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import IApp, {IChatList, IChatView, IMessageView} from "../../model/IApp";
import {Input, Divider, Header} from "semantic-ui-react";
import Search from "./Search";


interface IChatListProps {
    actions: typeof actions;
    chatList: IChatList;
    chat: IChatView
    search: any
}

const ChatList = (props: IChatListProps) => {
    useEffect(() => {
        if (!props.chatList.data)
            props.actions.fetchChats();
    }, [props.actions]);

    const onClick = (elem: IMessageView) => {
        if (elem.chat.id !== props.chat.id) {
            props.actions.fetchMessages(elem.chat.id, elem.user)
        } else {
            props.actions.closeChat();
        }
    };

    return (
        (<div className="chat-list-wrap">
                {props.search.isOpen ? <Search {...props}/> :
                    <>
                        {props.chatList.data && props.chatList.data.map(elem => elem && elem.message && (
                            <ChatElem key={elem.chat.id} id={elem.chat.id}
                                      chatId={props.chat.id}
                                      name={elem.user.username}
                                      date={elem.message.time}
                                      message={elem.message}
                                      avatar={elem.user.avatar}
                                      typing={elem.isTyping || false}
                                      timeTyping={elem.timeTyping}
                                      actions={props.actions}
                                      onClick={() => onClick(elem)}/>
                        ))}
                    </>}
            </div>
        ))
};

const mapStateToProps = (state: IApp): any => ({
    chatList: state.chatList,
    chat: state.chat,
    search: state.search
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList);
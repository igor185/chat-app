import ChatElem from "./ChatElem";
import React, {useEffect} from "react";
import "./styles.sass";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import IApp, {IChatList, IChatView} from "../../model/IApp";
import {Input, Divider, Header} from "semantic-ui-react";

const mapStateToProps = (state: IApp): any => ({
    chatList: state.chatList
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
    console.log(props);
    useEffect(() => {
        if (!props.chatList.data)
            props.actions.fetchChats();
    }, [props.actions]);

    return (
        <>

           <div className="chat-list-wrap">
               <Input placeholder='Search...' fluid/>
               <Divider />
               <Header as='h3'>Chats</Header>
                {props.chatList.data && props.chatList.data.map(elem => <ChatElem key={elem.id} id={elem.id}
                                                                                  name={elem.user.name}
                                                                                  date={elem.time}
                                                                                  message={elem.message}
                                                                                  onClick={(id: number) => props.actions.fetchMessages(elem.chat.id)}/>)}
            </div>
        </>
    )
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList);
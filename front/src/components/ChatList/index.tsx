import ChatElem from "./ChatElem";
import React, {useEffect} from "react";
import "./styles.sass";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import {IChat} from "../../model/IApp";

const mapStateToProps = (state: any): any => ({
    chats: state.chats
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});

interface IChatListProps{
    actions: typeof actions;
    chats: IChat[];
}
const ChatList = (props: IChatListProps) => {
    useEffect(() => {
        props.actions.fetchChats();
    }, [props.actions]);

    return (
        <div className="chat-list-wrap">
            {props.chats.map(elem => <ChatElem id={elem.id} name={elem.name_user1} date={elem.time} message={elem.message}/>)}
        </div>
    )
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList);
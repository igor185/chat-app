import React from 'react';
import './styles.sass';
import Header from "../Header";
import ChatList from "../ChatList";

const Chat = (props: any) => {
    return (
        <div className="main-wrapper">
            <div style={ {background: "white"} }>
                    <Header />
                <div className="content-wrap">
                    <ChatList {...props} />
                </div>
            </div>
        </div>
    )
};

export default Chat;
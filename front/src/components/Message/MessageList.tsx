import MessageItem from "./MessageItem";
import React from "react";
import autoscroll from '../../helpers/autoscroll';


class MessageList extends React.Component<any> {
    render() {
        return (
            <div className="messages-wrap" {...this.props}>
                <div>
                    {(this.props.chat.data || []).map((elem: any) =>
                        <MessageItem
                            key={elem.id}
                            message={elem}
                            user={this.props.user}/>
                    )}
                </div>
            </div>)
    }
};


export default autoscroll(MessageList);
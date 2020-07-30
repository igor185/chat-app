import MessageItem from "./MessageItem";
import React from "react";
import autoscroll from '../../helpers/autoscroll';


class MessageList extends React.Component<any> {

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        try{
            const data  = this.props.chat.data;
            if(data.length > prevProps.chat.data.length){
                if(data[data.length - 1].user.id !== this.props.user.id) {
                    console.log('i read');
                    this.props.actions.readChat(this.props.chat.id, this.props.chat.user.id);
                }
            }
        }catch (e) {
            console.log(e);
        }

    }

    render() {
        const checked = (i: number) =>
            this.props.chat.userId !== this.props.user.id ? true : (
                this.props.chat.data.length - i >= this.props.chat.count + 1
            );

        return (
            <div className="messages-wrap" {...this.props}>
                <div>
                    {(this.props.chat.data || []).map((elem: any, i:number) =>
                        <MessageItem
                            checked={checked(i)}
                            key={elem.id}
                            message={elem}
                            user={this.props.user}/>
                    )}
                </div>
            </div>)
    }
};

export default autoscroll(MessageList);
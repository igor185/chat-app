import React, {useState} from 'react';
import {Form, Header, Icon, Input} from "semantic-ui-react";
import ChatElem from "../ChatElem";
import {IUser} from "../../../model/IApp";


const Search = (props: any) => {
    const [value, setValue] = useState("");
    const onText = (user: IUser) => {

        const chat = props.chatList.data.find( (elem: any) =>elem.user.id === user.id);
        if(chat){
            return props.actions.fetchMessages(chat.chat.id, user);
        }
        props.actions.newChat(user.id);
    };

    const getNotFound = () => (
        <Header as='h4' icon textAlign={"center"}>
            <Icon name='window close outline' size={"mini"}/>
            Not found
        </Header>
    );
    const getUserList = () => (
        <>
            {props.search.data.map((elem: IUser) =>
                <ChatElem
                    key={elem.id}
                    id={elem.id}
                    name={elem.username}
                    avatar={elem.avatar}
                    onClick={() => onText(elem)}
                    show
                />
            )}
        </>
    );


    return (
        <>
            <Form onSubmit={() => value.trim() && props.actions.search(value)}>
                <Input
                    loading={props.search.isFetching}
                    value={value}
                    icon='user'
                    placeholder='Search...'
                    iconPosition='left'
                    onChange={(e, data) => setValue(data.value)}
                />
            </Form>
            <>
                {props.search.data && (props.search.data.length > 0 ? getUserList() : getNotFound())}
            </>
        </>
    )
};


export default Search;
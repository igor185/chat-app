import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Dropdown, Form, Header, Icon, Input, Modal, Comment} from "semantic-ui-react";

import './styles.sass'
import IApp, {IUser} from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";

const options = [
    {key: 'user', text: 'User', value: 'user'},
];

const Search = (props: any) => {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);

    const onSearch = () => {
        props.actions.search(value);
    };

    const onText = (user: IUser) => {
        setOpen(false);

        const chat = props.chatList.data.find( (elem: any) => elem.user.id === user.id);
        if(chat){
            return props.actions.fetchMessages(chat.chat.id, user);
        }
        props.actions.newChat(user.id, user);
    };


    return (
        <Modal
            open={open}
            trigger={<div className="icon-wrap" onClick={() => setOpen(true)}>
                <FontAwesomeIcon icon={faSearch}/></div>}>
            <Modal.Header>Search</Modal.Header>
            <Modal.Content
                scrolling>
                <Form onSubmit={onSearch}><Input
                    label={<Dropdown defaultValue={options[0].value} options={options}/>}
                    labelPosition='left'
                    placeholder='Search...'
                    fluid
                    loading={props.search.isFetching}
                    value={value}
                    onChange={(e, data) => setValue(data.value)}
                />
                    {props.search.data && props.search.data.length > 0 && (
                        <>
                            <Header as={'h2'}>Results</Header>
                            {props.search.data.map((user: IUser) => (
                                <Comment.Group>
                                    <Comment>
                                        <Comment.Avatar as='a' src={user.avatar}/>
                                        <Comment.Content>
                                            <Comment.Author>{user.username}</Comment.Author>
                                            <Comment.Actions>
                                                <Comment.Action><span onClick={() => {onText(user)}}>Text</span></Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>
                            ))}
                        </>
                    )}
                </Form>
            </Modal.Content>
        </Modal>
    );
};


const mapStateToProps = (state: IApp): any => ({
    search: state.search,
    chatList: state.chatList
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

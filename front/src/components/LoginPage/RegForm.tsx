import React, {useState} from 'react'
import { Button, Form, Grid, Header, Message, Segment, Image } from 'semantic-ui-react'
import IApp from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import { getAvatars} from "../../helpers";

const imageList = [...getAvatars(14)];

const RegForm = (props: any) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");


    const onSubmit = () => props.actions.regUser(login, password, avatar);

    console.log(props.regPage && props.regPage.error);

    return (
        <Grid textAlign='center' style={{  position: "absolute", top: "20%", left: "35%" }} verticalAlign='middle'>
            <Grid.Column style={{ width: 500, background: "white" }}>
                <Header as='h2' textAlign='center'>
                    Sign up to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={login} onChange={(event, data) => setLogin(data.value)}/>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(event, data) => setPassword(data.value)}
                        />
                        <Header as='h4' textAlign='left'>
                            Choose a photo
                        </Header>
                        <ImagePicker
                            images={imageList.map((image, i) => ({src: image, value: i}))}
                            onPick={(data: any) => setAvatar(data.src)}
                        />
                        <Button className={"color-btn"} fluid size='large' onClick={onSubmit} loading={props.regPage && props.regPage.isFetching}>
                            Sign up
                        </Button>
                    </Segment>
                </Form>
                {props.regPage && !!props.regPage.error && (<Message
                    error
                    content={props.regPage.error}
                />)}
                <Message>
                    Already has account? <a href='#'  onClick={() => props.actions.changePage("login")}>Login</a>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = (state: IApp): any => ({
    showPanel: state.showPanel,
    regPage: state.regPage
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegForm);
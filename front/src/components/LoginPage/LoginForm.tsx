import React, {useState} from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import IApp from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";

const LoginForm = (props: any) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");


    const onSubmit = () => props.actions.loginUser(login, password);

    return (
        <Grid textAlign='center' style={{  position: "absolute", top: "30%", left: "35%" }} verticalAlign='middle'>
            <Grid.Column style={{ width: 500, background: "white" }}>
                <Header as='h2' textAlign='center'>
                    Login to your account
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
                            error={props.loginPage && !!props.loginPage.error}
                        />

                        <Button className={"color-btn"} fluid size='large' onClick={onSubmit} loading={props.loginPage && props.loginPage.isFetching}>
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href="#" onClick={() => props.actions.changePage("reg")}>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = (state: IApp): any => ({
    showPanel: state.showPanel,
    loginPage: state.loginPage
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
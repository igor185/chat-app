import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import 'semantic-ui-css/semantic.min.css'
import LoginPage from "./components/LoginPage";
import IApp from "./model/IApp";
import {connect} from "react-redux";

const App: React.FC = (props: any) => {
    switch (props.page) {
        case "login":
        case 'reg':
            return <LoginPage page={props.page}/>;
        default:
            return (
                <div className="App">
                    <Chat/>
                </div>
            )
    }
};

const mapStateToProps = (state: IApp): any => ({
    page: state.page
});

export default connect(
    mapStateToProps,
)(App);
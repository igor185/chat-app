import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import 'semantic-ui-css/semantic.min.css'
import LoginPage from "./components/LoginPage";
import IApp from "./model/IApp";
import {connect} from "react-redux";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ConfirmPage from "./components/ConfirmPage";

const App: React.FC = (props: any) => {
    switch (props.page) {
        case "login":
        case 'reg':
            return <LoginPage page={props.page}/>;
        default:
            if(window.location.href.indexOf("/email") === -1) {
                return (
                    <div className="App">
                        <Chat/>
                        <NotificationContainer/>
                    </div>
                )
            } else {
              const [,type, ...token] = window.location.pathname.split("/");
              if(type === "email-confirm"){
                  return <ConfirmPage token={token.join("/")}/>;
              }else if(type === "email-reset"){
                  return (<span>reset</span>);
              }
            }
            return <span>not found</span>;
    }
};

const mapStateToProps = (state: IApp): any => ({
    page: state.page

});

export default connect(
    mapStateToProps,
)(App);
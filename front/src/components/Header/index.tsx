import React, {useState} from "react";
import "./styles.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import IApp, {IUser} from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import {Image} from "semantic-ui-react";
import UserView from "../UserView";

const Header = (props: any) => {
    const onLogOut = () => {
        localStorage.removeItem('token');
        props.actions.clearStore();
    };
    const [close, setClose] = useState(false);
    const [userView, setUserView] = useState<IUser | null>(null);

    const onClick = (user: IUser) => {
        if (user) {
            setClose(true);
            setUserView(user);
        }
    };

    const user = props.chat.user;

    return (
        <div className="header-wrap">
            <div className="left-side">
                <div className="icon-wrap" onClick={() => props.actions.togglePanel()}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className="icon-wrap" onClick={() => props.actions.toggleSearch()}>
                    <FontAwesomeIcon icon={faSearch}/></div>
            </div>
            {user &&
            <div className={"header-user"} onClick={() => onClick(user)}>
                <div className="avatar">
                    <Image avatar src={user.avatar}/>
                </div>
                <div className="name">{user.username}</div>
            </div>}
            <div className="right-size" onClick={() => onClick(props.user.data)}>
                <Image avatar src={props.user.data.avatar}/>
            </div>
            {userView && <UserView
                isEdit={userView.id === props.user.data.id}
                close={close}
                setClose={setClose}
                user={userView}
                actions={props.actions}
                onLogOut={onLogOut}
            />
            }
        </div>
    )
};

const mapStateToProps = (state: IApp): any => ({
    chat: state.chat,
    user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

import React from "react";
import "./styles.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import IApp from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import Search from "../Search/Search";

const Header = (props: any) => {
    const onLogOut = () => {
        localStorage.removeItem('token');
        props.actions.clearStore();
    };


    return (
        <div className="header-wrap">
            <div className="left-side">
                <div className="icon-wrap" onClick={() => props.actions.togglePanel()}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <Search />
            </div>
            <div className="right-size">
                <div className="icon-wrap" onClick={onLogOut}>
                    <FontAwesomeIcon icon={faSignOutAlt}/>
                </div>
            </div>

        </div>
    )
};

// togglePanel
const mapStateToProps = (state: IApp): any => ({});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

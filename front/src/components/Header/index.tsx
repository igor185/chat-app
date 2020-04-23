import React from "react";
import "./styles.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import IApp from "../../model/IApp";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";

const Header = (props: any) => {


    return (
        <div className="header-wrap">
            <div className="left-side">
                <div className="icon-wrap" onClick={() => props.actions.togglePanel()}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className="icon-wrap">
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
            </div>
            <div className="right-size">
                <div className="icon-wrap">
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

import React from "react";
import "./styles.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

const Header = () => {


    return (
        <div className="header-wrap">
            <div className="left-side">
                <div className="icon-wrap">
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


export default Header;
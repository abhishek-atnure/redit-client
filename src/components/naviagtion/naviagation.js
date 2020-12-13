import React from 'react';

import redditLogo from "./redditLogo.svg";
import "./naviagation.css";

function Navigation(props) {

    return (
        <div className="nav">
            <div className="left">
                <img src={redditLogo} alt="Logo" />
                <p><span className="logoSpan">Reddit</span>Minimal</p>
            </div>

            <div className="right">
                <span onClick={() => props.onClick()}>Home</span>
            </div>
        </div>
    )
}

export default Navigation;
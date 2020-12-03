import React, { Component } from "react";
import "./help-tip.styles.css";


const HelpTip = (props) => {
    return (
    <div class="help-tip">
        <p>{props.text}</p>
    </div> 
    )
}

export default HelpTip;

import React from "react";
import "./feature.css";

function Feature ({title,text}) {

    return (
        <div className="gpt3__feature">
            <div className="gpt3__feature__header">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="gpt3__feature__content">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature

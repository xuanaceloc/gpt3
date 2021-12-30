import React from "react";
import "./posibility.css";
import posibility from "../../assets/img/possibility.png"

function Posibolity () {


    return (
        <div className="gpt3__posibility section__padding" id="posibility">
            <div className="gpt3__posibility__image">
                <img src={posibility} alt="posibility" />
            </div>
            <div className="gpt3__posibility__content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. 
                    Not thoughts all exercise blessing. Indulgence way everything 
                    joy alteration boisterous the attachment. Party we years to order
                     allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Posibolity

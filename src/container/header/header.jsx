import React from "react";
import "./header.css";
import Ai from "../../assets/img/ai.png";
import people from "../../assets/img/people.png";

function Header () {
    return (
        <div className='gpt3__header section__padding'>
                <div className="gpt3__header_content">
                    <h1 className="gradient__text">Let’s Build Something amazing 
                    with GPT-3 OpenAI</h1>
                    <p className="gpt3__header_content-desc">
                        Yet bed any for travelling assistance indulgence unpleasing. 
                        Not thoughts all exercise blessing. Indulgence way everything 
                        joy alteration boisterous the attachment. Party we years to order 
                        allow asked of.
                    </p>
                    <div className="gpt3__header_content-input">
                        <input type="gmail" placeholder="Your Email address"  />
                        <button type="button"> Get Started</button>
                    </div>
                    <div className="gpt3__header_content-people">
                        <img src={people} alt="people" />
                        <p>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
                <div className="gpt3__header_image">
                    <img src={Ai} alt="ai" />
                </div>
        </div>
    )
}

export default Header

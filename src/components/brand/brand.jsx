import React from "react";
import "./brand.css";
import google from "../../assets/img/google.png";
import shopify from "../../assets/img/shopify.png";
import slack from "../../assets/img/slack.png";
import atlassian from "../../assets/img/atlassian.png";
import dropbox from "../../assets/img/dropbox.png";

function Brand () {


    return (
        <div className="gpt3__brand section__padding">
            <ul className="gpt3__brand__list">
                <li><img src={google} alt="google" /></li>
                <li><img src={slack} alt="slack" /></li>
                <li><img src={atlassian} alt="atlassian" /></li>
                <li><img src={dropbox} alt="dropbox" /></li>
                <li><img src={shopify} alt="shopify" /></li>
            </ul>
        </div>
    )
}

export default Brand

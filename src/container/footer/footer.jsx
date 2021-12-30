import React from "react";
import "./footer.css";
import logo from "../../assets/img/logo.svg"

function Footer () {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer__heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="gpt3__footer__btn">
                <p>Request Early Access</p>
            </div>
            <div className="gpt3__footer__links">
                <div className="gpt3__footer__links-logo">
                    <img src={logo} alt="" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <ul className="gpt3__footer__links-list">
                    <li><a href="#">Links</a></li>
                    <li><a href="#">Overons</a></li>
                    <li><a href="#">Social Media</a></li>
                    <li><a href="#">Counters</a></li>
                    <li><a href="#">Contact</a></li>   
                </ul>
                <ul className="gpt3__footer__links-list">
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact</a></li>   
                </ul>
                <ul className="gpt3__footer__links-list">
                    <li><a href="#">Get in touch</a></li>
                    <li><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></li>
                    <li><a href="#">085-132567</a></li>
                    <li><a href="#">info@payme.net</a></li>   
                </ul>
            </div>
            <div className="gpt3__footer__copyright">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer

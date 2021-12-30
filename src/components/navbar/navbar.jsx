import React, {useState} from "react";
import {FaBars,FaTimes} from 'react-icons/fa';
import Styles from "./navbar.module.scss";

import Logo from "../../assets/img/logo.svg";

function Navbar () {
    const [toggleMenu,setToggleMenu] = useState(false)

    return (
        <div className={Styles.navbar}>
            <div className={Styles.links}>
                <div className={Styles.links__logo}>
                    <img src={Logo} alt="logo" />
                </div>
                <ul className={Styles.links__container}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#wgpt3">What is GPT</a></li>
                    <li><a href="#posibility">Open AI</a></li>
                    <li><a href="#features">CaseStudies</a></li>
                    <li><a href="#blog">Library</a></li>
                </ul>
            </div> 
            <div className={Styles.sign}>
                <span>Sign in</span>
                <button className={Styles.sign__btn} type="button">Sign up</button>
            </div>
            <div className={Styles.menu}>
                <div className={Styles.menu_icon}>
                    {toggleMenu ? 
                        <FaTimes onClick={() => setToggleMenu(!toggleMenu)}  />
                        : <FaBars onClick={() => setToggleMenu(!toggleMenu)} />
                    }
                    {
                        toggleMenu && 
                        <div className="scale-up-top">
                            <ul className={Styles.menu__container}>
                                <li><a href="#">Home</a></li>
                                <li><a href="#wgpt3">What is GPT</a></li>
                                <li><a href="#posibility">Open AI</a></li>
                                <li><a href="#features">CaseStudies</a></li>
                                <li><a href="#blog">Library</a></li>
                            </ul>
                            <div className={Styles.sign}>
                                <span>Sign in</span>
                                <button className={Styles.sign__btn} type="button">Sign up</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar

import React, { useState } from "react";

// modules
import DropMenu from "./dropmenu";
import '../css/nav_bar.css';
import TitleLogo from '../images/title_logo.png';



const NavBar = () => {

    const [visMenu, setVisMenu] = useState(false)

    const ocMenu = async () => {
        setVisMenu(!visMenu)
    }

    return (
        <div id="nav-main">
            <div id="logo">
            </div>
            <div id="title_logo">
                <div id="menu"
                    onClick={ocMenu}>
                    <img src={TitleLogo} alt="Title Logo"/>
                    {visMenu ? (
                        <DropMenu
                            ocMenu={ocMenu} />
                    ):(
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar
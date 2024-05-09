import React, { useState } from "react";

// modules
import DropMenu from "./dropmenu";
import '../css/nav_bar.css'



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
                <div id="menu">
                    <img src="src\images\title_logo.png" alt=""
                        onClick={ocMenu}/>
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
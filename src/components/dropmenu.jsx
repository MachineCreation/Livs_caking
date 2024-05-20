import React, { useEffect, useRef } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import '../css/dropmenu.css';

const DropMenu = ({ ocMenu }) => {

    const menuRef = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside the menu
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                ocMenu(); // Close the menu
            }
        };

        // Add event listener for mousedown events
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Cleanup the event listener on component unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ocMenu]);

    // Function to handle toggling menu visibility
    const handleClick = () => {
        ocMenu(); // Toggle menu visibility
    };

    return (
        <div id="dropmenu" ref={menuRef}>
            <ul>
                <li onClick={handleClick}><Link className="custom-link" smooth to="/">Home</Link></li>
                <li onClick={handleClick}><Link className="custom-link" smooth to="/menu#cake1">Specialty Cakes</Link></li>
                <li onClick={handleClick}><Link className="custom-link" smooth to="/menu#cake5">Build Your Own Cake</Link></li>
                <li onClick={handleClick}><Link className="custom-link" smooth to="/menu">Menu</Link></li>
                <li onClick={handleClick}><Link className="custom-link" smooth to="/contact">Get To Know Me</Link></li>
                <li onClick={handleClick}><Link className="custom-link" smooth to="/gallery">Gallery</Link></li>
                <li onClick={handleClick}><Link className="custom-link" smooth to="/cart">Cart</Link></li>
            </ul>
        </div>
    );
}

export default DropMenu;

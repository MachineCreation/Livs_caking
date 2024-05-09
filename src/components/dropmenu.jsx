import React from "react";
import { useNavigate } from 'react-router-dom';
import '../css/dropmenu.css';

const DropMenu = ({ ocMenu }) => {
    const navigate = useNavigate();

    // Function to handle navigation and toggle menu visibility
    const handleClick = (path) => {
        navigate(path);
        ocMenu(); // Toggle menu visibility
    };

    return (
        <div id="dropmenu">
            <ul>
                <li onClick={() => handleClick('/')}>Home</li>
                <li onClick={() => handleClick('/specialty-cakes')}>Specialty Cakes</li>
                <li onClick={() => handleClick('/Build-your-own')}>Build Your Own Cake</li>
                <li onClick={() => handleClick('/contact')}>Get To Know Me</li>
                <li onClick={() => handleClick('/gallery')}>Gallery</li>
                <li onClick={() => handleClick('/cart')}>Cart</li>
            </ul>
        </div>
    );
}

export default DropMenu;
import React from "react";

// modules
import ContentBorder from "../components/structural_components/content_border";
import SCakes from "../components/page_components/scakes";
import BYO from "../components/page_components/BYO";

//css
import '../css/menu.css';


function Menu() {

    return (

        <ContentBorder>
            <SCakes />
            <BYO />
        </ContentBorder>

    )
}

export default Menu
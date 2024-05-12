import React from "react";

// modules
import ContentBorder from "../components/structural_components/content_border";
import SCakes from "../components/page_components/scakes";

//css
import '../css/specialty_cakes.css';


function SpecialtyCakes() {

    return (
            <div>
                    <ContentBorder
                child={<SCakes />}
                />
            </div>
    )
}

export default SpecialtyCakes
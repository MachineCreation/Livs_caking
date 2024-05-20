import React from "react";

//css
import '../../css/content_border.css';


function ContentBorder({children}) {

    return (
            <div className="parent-container">
                <div className="container">
                    {children}
                </div>
            </div>
    )
}

export default ContentBorder
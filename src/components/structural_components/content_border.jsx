import React from "react";

//css
import '../../css/content_border.css';


function ContentBorder({child}) {

    return (
            <div className="parent-container">
                <div className="container">
                    {child}
                </div>
            </div>
    )
}

export default ContentBorder
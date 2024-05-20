import React from "react";

// css
import '../../css/menu.css'

const BYO = () => {
    return(
        <div className="content-main">
            <div className="break"></div>
            <div className="title font-large">Build Your Own</div>
                <div className="BYO-content">
                    <div id="section-1">
                        <div className="title font-medium left">Cake Bases</div>   
                        <ul className="left accent b-padding">
                            <li>Vanilla Bean</li>
                            <li>Chocolate Expresso</li>
                            <li>Carrot</li>
                            <li>Toasted</li>
                            <li>Coconut</li>
                            <li>Orange</li>
                            <li>Lemon poppyseed</li>
                            <li>Caramel</li>
                            <li>Spice</li>
                            <li>Coffee</li>
                        </ul>
                        <div className="title font-medium left">Fillings</div>
                        <div className="title font-small left">seasonal availability</div>
                        <ul className="left accent b-padding">
                            <li></li>
                        </ul>
                    </div>
                    <div id="section-2">
                        section-2
                    </div>
                </div>
        </div>
    )
}

export default BYO
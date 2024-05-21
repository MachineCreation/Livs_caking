import React from "react";

// css
import '../../css/menu.css'

const BYO = () => {
    return(
        <div className="content-main">
            <div className="break"></div>
            <div id='BYO' className="title font-large">Build Your Own</div>
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
                            <li>Fruit Compotes</li>
                            <li>Citrus Curds</li>
                            <li>Fresh Fruit</li>
                            <li>Nuts</li>
                        </ul>
                    </div>
                    <div id="section-2">
                        <div className="title font-medium left">Buttercream</div>
                        <ul className="left accent b-padding">
                            <li>Spiced Brown Butter Cream Cheese</li>
                            <li>Vanilla Bean</li>
                            <li>Chocolate</li>
                            <li>Molasses</li>
                            <li>Black Berry</li>
                            <li>Raspberry</li>
                            <li>Lavender </li>
                            <li>Coffee</li>
                        </ul>
                        <div className="title font-medium left">Soaks</div>
                        <ul className="left accent b-padding">
                            <li>Infused Simple Syrups</li>
                            <li>Infused Milk Soaks</li>
                        </ul>
                    </div>
                </div>
            <div className="title">
                <button></button>
            </div>
        </div>
    )
}

export default BYO
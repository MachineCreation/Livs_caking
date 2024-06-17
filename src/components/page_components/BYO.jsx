import React, { useState } from "react";
import { useCart } from '../../config/CartContext';

//css
import '../../css/menu.css';

const BYO = () => {
    const [selectedItem, setSelectedItem] = useState({
        title: "Build Your Own",
        cakeBase: '',
        filling: 'none',
        buttercream: 'none',
        soak: 'none',
        size: ''
    });
    const [modalVisible, setModalVisible] = useState(false);
    const { addItemToCart } = useCart();

    const cakeBases = ["Vanilla Bean", "Chocolate Espresso", "Carrot", "Toasted", "Coconut", "Orange", "Lemon poppyseed", "Caramel", "Spice", "Coffee"];
    const fillings = ["none", "Fruit Compotes", "Citrus Curds", "Fresh Fruit", "Nuts"];
    const buttercreams = ["none", "Spiced Browned Butter Cream Cheese", "Vanilla Bean", "Chocolate", "Honey Chamomile", "Molasses", "Blackberry", "Raspberry", "Lavender", "Coffee"];
    const soaks = ["none", "Infused Simple Syrups", "Infused Milk Soaks"];
    const sizes = ["small", "medium", "large"];

    const handleButtonClick = () => {
        setModalVisible(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedItem((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddToCart = () => {
        addItemToCart(selectedItem);
        setModalVisible(false);
        setSelectedItem({
            title: "Build Your Own",
            cakeBase: '',
            filling: 'none',
            buttercream: 'none',
            soak: 'none',
            size: ''
        });
    };

    return (
        <div className="content-main">
            <div className="break"></div>
            <div className="title font-large">Build Your Own</div>
            <button onClick={handleButtonClick}>Customize Your Cake</button>
            <div id="BYO" className="BYO-content">
                <div id="section-1">
                    <div className="title font-medium left">Cake Bases</div>   
                    <ul className="left accent b-padding">
                        {cakeBases.map((base, index) => (
                            <li key={index}>{base}</li>
                        ))}
                    </ul>
                    <div className="title font-medium left">Fillings</div>
                    <div className="title font-small left">seasonal availability</div>
                    <ul className="left accent b-padding">
                        {fillings.slice(1).map((filling, index) => (
                            <li key={index}>{filling}</li>
                        ))}
                    </ul>
                </div>
                <div id="section-2">
                    <div className="title font-medium left">Buttercream</div>
                    <ul className="left accent b-padding">
                        {buttercreams.slice(1).map((buttercream, index) => (
                            <li key={index}>{buttercream}</li>
                        ))}
                    </ul>
                    <div className="title font-medium left">Soaks</div>
                    <ul className="left accent b-padding">
                        {soaks.slice(1).map((soak, index) => (
                            <li key={index}>{soak}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button onClick={handleButtonClick}>Customize Your Cake</button>

            {modalVisible && (
                <div className="modal-overlay" onClick={() => setModalVisible(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="title font-large">{selectedItem.title}</div>
                        <div className="input-area accent">
                            <label>
                                Cake Bases:
                                <select name="cakeBase" value={selectedItem.cakeBase} onChange={handleInputChange}>
                                    <option value="">--Select Cake Base--</option>
                                    {cakeBases.map((base, index) => (
                                        <option key={index} value={base}>{base}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Fillings:
                                <select name="filling" value={selectedItem.filling} onChange={handleInputChange}>
                                    {fillings.map((filling, index) => (
                                        <option key={index} value={filling}>{filling}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Buttercream:
                                <select name="buttercream" value={selectedItem.buttercream} onChange={handleInputChange}>
                                    {buttercreams.map((buttercream, index) => (
                                        <option key={index} value={buttercream}>{buttercream}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Soaks:
                                <select name="soak" value={selectedItem.soak} onChange={handleInputChange}>
                                    {soaks.map((soak, index) => (
                                        <option key={index} value={soak}>{soak}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Size:
                                <select name="size" value={selectedItem.size} onChange={handleInputChange}>
                                    <option value="">--Select Size--</option>
                                    {sizes.map((size, index) => (
                                        <option key={index} value={size}>{size}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <button id="add-button" onClick={handleAddToCart} disabled={!selectedItem.cakeBase || !selectedItem.size}>
                            Add to Cart
                        </button>
                        <button id="back-button" onClick={() => setModalVisible(false)}>
                            Back
                        </button>
                    </div>
                </div>
            )}
            <div id="left-flower"></div>
            <div id="right-flower"></div>
        </div>
    );
};

export default BYO;

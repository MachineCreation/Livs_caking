import React, { useState } from "react";
import { useCart } from '../../config/CartContext';

//css
import '../../css/menu.css';

const SCakes = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [size, setSize] = useState('');
    const { addItemToCart } = useCart();

    const cakes = [
        {
            id: 'cake1',
            title: "Bumbleberry Bliss Cake",
            description: "Caramel Cake, Blackberry Compote, Honey Chamomile Buttercream",
            details: "Heavenly caramel cake paired with a rich blackberry compote and frosted with a smooth honey chamomile buttercream. This delightful cake marries the deep, sweet flavors of caramel and blackberries with the soothing notes of honey and chamomile, creating a truly comforting and indulgent treat. Perfect for any dessert lover seeking a unique and flavorful experience."
        },
        {
            id: 'cake2',
            title: "Apricot Spice Delight Cake",
            description: "Cardamom Cake, Apricot Jam Layers, Brown Butter Cream Cheese Frosting",
            details: "A unique combination of fragrant cardamom-infused cake layered with sweet apricot jam and finished with a luscious brown butter cream cheese frosting. This cake is a perfect fusion of warm spices and bright fruit flavors, ideal for any occasion that calls for a touch of elegance."
        },
        {
            id: 'cake3',
            title: "Chocolate Velvet Indulgence Cake",
            description: "Dark Chocolate Cake, Velvet Ganache, Raspberry Preserves",
            details: "A decadent dark chocolate cake filled with silky velvet ganache and tart raspberry preserves, creating a perfect harmony of rich and fruity flavors. This cake is a dream come true for chocolate lovers, offering a luxurious and indulgent experience in every bite."
        },
        {
            id: 'cake4',
            title: "Lemon Lavender Elegance Cake",
            description: "Lemon Cake, Lavender Syrup, Vanilla Bean Buttercream",
            details: "A delicate lemon cake soaked with aromatic lavender syrup and frosted with a smooth vanilla bean buttercream. This cake combines the bright citrus notes of lemon with the floral essence of lavender, resulting in a refined and sophisticated dessert perfect for any special occasion."
        },
        {
            id: 'cake5',
            title: "Tropical Coconut Paradise Cake",
            description: "Coconut Cake, Pineapple Filling, Coconut Cream Frosting",
            details: "A light and fluffy coconut cake filled with tangy pineapple and covered in a creamy coconut frosting. This tropical delight transports your taste buds to an island paradise, making it an ideal choice for summer celebrations and beach-themed parties."
        }
    ];

    const handleItemClick = (cake) => {
        setSelectedItem(cake);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleAddToCart = () => {
        addItemToCart({ ...selectedItem, size });
        setSelectedItem(null);
        setSize('');
    };

    return (
        <div className="content-main">
            <div className="title font-large">Specialty Cakes</div>
            <div className="menu-content">
                {cakes.map((cake, index) => (
                    <div
                        key={cake.id}
                        id={cake.id}
                        className={`content-box ${index % 2 === 0 ? 'left' : 'right'}`}
                        onClick={() => handleItemClick(cake)}
                    >
                        <div className="title font-medium">{cake.title}</div>
                        <div>
                            <p>{cake.description}</p>
                            <p className="accent">{cake.details}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedItem.title}</h2>
                        <p>{selectedItem.description}</p>
                        <p className="accent">{selectedItem.details}</p>
                        <label>
                            Select size:
                            <select value={size} onChange={handleSizeChange}>
                                <option value="">--Select Size--</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </label>
                        <button id="add-button" onClick={handleAddToCart} disabled={!size}>
                            Add to Cart
                        </button>
                        <button id="back-button" onClick={() => setSelectedItem(null)}>
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

export default SCakes;

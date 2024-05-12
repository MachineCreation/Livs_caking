import React from "react";

// modules
import Button from "../functional_components/button";

//css
import '../../css/specialty_cakes.css'

const SCakes = () => {

    return(
        <div id="scakes-main">
            <div className="title font-large">Specialty Cakes</div>
            <div id="menu-content">
                <div className="content-box right">
                    <div className="title font-medium">
                        Bumbleberry Bliss Cake
                    </div>
                    <div>
                        <p>Caramel Cake, Blackberry Compote, Honey Chamomile Buttercream</p>
                        <p className="accent">Heavenly caramel cake paired with a rich blackberry compote and frosted with 
                            a smooth honey chamomile buttercream. This delightful cake marries the deep, 
                            sweet flavors of caramel and blackberries with the soothing notes of honey and 
                            chamomile, creating a truly comforting and indulgent treat. Perfect for any 
                            dessert lover seeking a unique and flavorful experience.</p>
                    </div>
                </div>
                <div className="content-box left">
                    <div className="title font-medium">
                        Apricot Spice Delight Cake
                    </div>
                    <div>
                        <p>Cardamom Cake, Apricot Jam Layers, Brown Butter Cream Cheese Frosting</p>
                        <p className="accent">A unique combination of fragrant cardamom-infused cake layered with sweet apricot jam 
                            and finished with a luscious brown butter cream cheese frosting. This cake is a perfect 
                            fusion of warm spices and bright fruit flavors, ideal for any occasion that calls for
                             a touch of elegance.</p>
                    </div>
                </div>
                <div className="content-box right">
                    <div className="title font-medium">
                        Citrus Snap Mocha Cake
                    </div>
                    <div>
                        <p>Orange Cake, Gingersnap Crumble, Mocha Buttercream, Candied Orange</p>
                        <p className="accent">Featuring vibrant orange cake layered with crunchy gingersnap crumble and frosted 
                            with rich mocha buttercream. Each bite is adorned with candied orange for a delightful
                             zesty finish. This unique blend of flavors makes it a standout dessert that's sure 
                             to impress.</p>
                    </div>
                </div>
                <div className="content-box left">
                    <div className="title font-medium">
                        Pecan Spice Carrot Cake
                    </div>
                    <div>
                        <p>Carrot Cake, Candied Pecan Layers, Spiced Brown Butter Cream Cheese Frosting</p>
                        <p className="accent">Classic carrot cake reimagined with luxurious layers of candied pecans and topped 
                            with a rich, spiced brown butter cream cheese frosting. This cake offers a perfect 
                            blend of sweet, spicy, and nutty flavors, making it a delightful choice for any 
                            celebration or cozy gathering.</p>
                    </div>
                </div>
                <div className="content-box right">
                    <div className="title font-medium">
                        Mocha Berry Dream Cake
                    </div>
                    <div>
                        <p>Chocolate Espresso Cake, Strawberry Layers, Honey Chamomile Buttercream</p>
                        <p className="accent">Chocolate espresso cake layered with fresh strawberries and enveloped in a unique honey 
                            chamomile buttercream. This cake combines deep coffee tones with the sweetness of 
                            strawberries, topped off with a subtly floral and creamy frosting. A delightful treat 
                            for any occasion!</p>
                    </div>
                </div>
                <div className="content-box left b-padding">
                    <div className="title font-medium">
                        Coconut Lime Cloud Cake
                    </div>
                    <div>
                        <p>Toasted Coconut Cake, Lime Curd Filling, Swiss Meringue Vanilla Buttercream</p>
                        <p className="accent">Featuring toasted coconut cake layers filled with tangy lime curd and topped with a creamy Swiss
                             meringue vanilla buttercream. It's a perfect balance of tropical flavors and
                             smooth sweetness. Ideal for anyone looking to add a little zest to their dessert experience!
                        </p>
                    </div>
                </div>
                <div className="sticky-button">
                    <Button 
                        title={'Place Order'}
                        action={'/order'}
                    />
                </div>
            </div>
            <div id="left-flower"></div>
            <div id="right-flower"></div>
        </div>
    );
}

export default SCakes
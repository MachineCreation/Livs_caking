import React, { useState } from 'react';
import { useCart } from '../../config/CartContext';

//css
import '../../css/cart.css'

const CartComponent = () => {
  const { cart, emptyCart } = useCart();
  const [email, setEmail] = useState('');
  const [pickupDate, setPickupDate] = useState('');

  const handlePlaceOrder = () => {
    if (!email || !pickupDate) return;

    const customerEmailContent = `
      Thank you for your order. I will get back to you with a confirmation as soon as I've had a chance to review the order.
      \n\nOrder Details:\n${cart.map(item => `${item.title} - ${item.name} - ${item.size}`).join('\n')}
      \n\nWarmest regards,\nLiv
    `;

    const ownerEmailContent = `
      New Order:\n${cart.map(item => `${item.title} - ${item.name} - ${item.size}`).join('\n')}
      \nPickup Date: ${pickupDate}
      \nCustomer Email: ${email}
    `;

    console.log("Sending emails...");
    console.log("To Customer:", customerEmailContent);
    console.log("To Owner:", ownerEmailContent);

    emptyCart();
    setEmail('');
    setPickupDate('');
  };

  // Calculate the total price based on item prices
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div id="cart-main">
      <div className='title font-large'>Your Cart</div>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div>
              <div className='font-medium'>{item.title}</div>
              <div className='font-small'>{item.name} - {item.size} - ${item.divrice}</div>
            </div>
          </li>
        ))}
      </ul>
      <div id='total'>
        Estimated Price: ${totalPrice.toFixed(2)} {/* Display the total price */}
      </div>
      <button onClick={emptyCart}>Empty Cart</button>
      <button onClick={handlePlaceOrder} disabled={!cart.length}>Place Order</button>
      {cart.length > 0 && (
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </div>
      )}
      <div id="right-leaves"></div>
      <div id="left-leaves"></div>
    </div>
  );
};

export default CartComponent;

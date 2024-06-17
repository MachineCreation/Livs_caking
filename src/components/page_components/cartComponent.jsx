import React, { useState } from 'react';
import { useCart } from '../../config/CartContext';
import emailjs from 'emailjs-com';

//css
import '../../css/cart.css';

const CartComponent = () => {
  const { cart, emptyCart } = useCart();
  const [email, setEmail] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [name, setName] = useState('')

  const handlePlaceOrder = () => {
    if (!email || !pickupDate) return;

    const customerEmailContent = `
      Thank you for your order. I will get back to you with a confirmation as soon as I've had a chance to review the order.
      \n\nOrder Details:\n${cart.map(item => `${item.title} - ${item.cakeBase} - ${item.filling} - ${item.buttercream} - ${item.soak} - ${item.size}`).join('\n')}
      \n\nWarmest regards,\nLiv
    `;

    const ownerEmailContent = `
      New Order:\n${cart.map(item => `${item.title} - ${item.cakeBase} - ${item.filling} - ${item.buttercream} - ${item.soak} - ${item.size}`).join('\n')}
      \nPickup Date: ${pickupDate}
      \nCustomer Email: ${email}
    `;

    // Send emails using EmailJS
    emailjs.send('your_service_id', 'your_template_id', {
      to_email: email,
      from_name: 'Cakes by Liv',
      message: customerEmailContent
    }, 'your_user_id')
    .then((response) => {
      console.log('Customer email sent!', response.status, response.text);
    }, (err) => {
      console.error('Failed to send customer email. Error:', err);
    });

    emailjs.send('your_service_id', 'your_template_id', {
      to_email: 'owner@example.com', // Replace with your email
      from_name: 'Cakes by Liv',
      message: ownerEmailContent
    }, 'your_user_id')
    .then((response) => {
      console.log('Owner email sent!', response.status, response.text);
    }, (err) => {
      console.error('Failed to send owner email. Error:', err);
    });

    emptyCart();
    setEmail('');
    setPickupDate('');
  };

  // Calculate the total price based on item prices
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div id="cart-main">
      <div className='title font-large'>Your Cart</div>
      <ul id='cart-list'>
        {cart.map((item, index) => (
          <li key={index}>
            <div>
              <div className='font-medium'>{item.title}</div>
              <div className='font-small'>{item.cakeBase} - {item.filling} - {item.buttercream} - {item.soak} - {item.size} - ${item.price}</div>
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
        <div id='user-info'>
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

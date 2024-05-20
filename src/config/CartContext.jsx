import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// Define size-based pricing
const sizePrices = {
  small: 10, // Example price for small size
  medium: 15, // Example price for medium size
  large: 20 // Example price for large size
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const price = sizePrices[item.size];
    const itemWithPrice = { ...item, price };
    setCart((prevCart) => [...prevCart, itemWithPrice]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

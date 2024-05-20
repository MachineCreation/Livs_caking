import React from 'react';

// modules
import ContentBorder from '../components/structural_components/content_border';
import CartComponent from '../components/page_components/cartComponent';

//css
import '../css/cart.css'


function Cart() {
  return (
    <ContentBorder>
      <CartComponent />
    </ContentBorder>
  );
};

export default Cart;

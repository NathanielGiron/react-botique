import React from 'react';

import './cart-icon.styles.scss';

const CartIcon = () => (
  <div className='cart-icon'>
    <span className='cart-text'>CART</span>
    <span className='item-count'>0</span>
  </div>
);

export default CartIcon;
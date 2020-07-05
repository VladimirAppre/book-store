import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './shop-header.css';

const ShopHeader = ({numItems, orderTotal}) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark"> Book Store</div>
      </Link>
      <Link to='/cart'>
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart"/>
          {numItems} товаров ({orderTotal} ₽)
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal }}) => {
  const numItems = cartItems.length;
  return {
    numItems, orderTotal
  };
};

export default connect(mapStateToProps)(ShopHeader);

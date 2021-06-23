/** @format */

import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className='nav__container'>
      <Link to='/'>
        <img className="nav__logo" src="https://media.istockphoto.com/vectors/online-shopping-logo-vector-id1143528479" alt="shopping bags" />
      </Link>
      <Link to='/cart'>
        <div className='nav__links'>
          <img
            className='nav__cart__img'
            src='https://images.unsplash.com/photo-1595367189327-391b72c90283?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvcHBpbmclMjBjYXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            alt='shopping cart'
          />
          <div className='nav__count'>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(NavBar);

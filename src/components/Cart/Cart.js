/** @format */

import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>

      <div className='cart__summary__container'>
        <h4 className='cart__summary__title'>Cart Summary</h4>
        <div className='cart__summary__span'>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className='cart__summary__btn'>Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

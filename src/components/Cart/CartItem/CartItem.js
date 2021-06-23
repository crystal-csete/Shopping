/** @format */

import React, { useState } from "react";
import "./CartItem.css";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (event) => {
    setInput(event.target.value);
    adjustQty(itemData.id, event.target.value);
  };

  return (
    <div className='cartItem__container'>
      <img
        className='cartItem__img'
        src={itemData.image}
        alt={itemData.title}
      />

      <div className='cartItem__text'>
        <h3>{itemData.title}</h3>
        <p>{itemData.description}</p>
        <p>$ {itemData.price}</p>
      </div>

      <div className='cartItem__btn__container'>
        <div className='cartItem__qty'>
          <label htmlFor='qty'>Qty</label>
          <input
            min='1'
            type='number'
            id='qty'
            name='qty'
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(itemData.id)}
          className='cartItem__trash__btn'>
          Trash
          <img
            className='trash__img'
            src='https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXNoJTIwaWNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            alt='full trash can'
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

/** @format */

import React from "react";
import "./Item.css";
import { connect } from "react-redux";
import {addToCart} from '../../redux/Shopping/shopping-actions'

const Item = ({ currentItem, addToCart }) => {
  return (
    <div className='item__container'>
      <img className='item__img' src={currentItem.image} alt={currentItem.title} />

      <div className='item__text'>
        <h3>{currentItem.title}</h3>
        <p>{currentItem.description}</p>
        <p>${currentItem.price}</p>

        <button onClick={() => addToCart(currentItem.id)} className='item__add__btn'>ADD</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);

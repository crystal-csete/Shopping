/** @format */

import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ productData, addToCart, loadCurrentItem }) => {
  return (
    <div className='product__container'>
      <img
        className='product__img'
        src={productData.image}
        alt={productData.title}
      />

      <div className='product__text'>
        <h3>{productData.title}</h3>
        <p>{productData.description}</p>
        <p>${productData.price}</p>
      </div>

      <div className='product__btn__container'>
        <Link to={`/product/${productData.id}`}>
          <button onClick={() => loadCurrentItem(productData)} className='product__view__btn'>View item</button>
        </Link>
        <button
          className='product__add__btn'
          onClick={() => addToCart(productData.id)}>
          ADD
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

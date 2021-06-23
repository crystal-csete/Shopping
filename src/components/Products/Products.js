/** @format */

import React from "react";
import Product from "./Product/Product";
import { connect } from "react-redux";

const Products = ({ products }) => {
  return (
    <div className='products__container'>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);

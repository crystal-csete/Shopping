/** @format */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Item from "./components/Item/Item";
import { connect } from "react-redux";

const App = ({ currentItem }) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/cart' component={Cart} />
          {!currentItem ? (
            <Redirect to='/' />
          ) : (
            <Route exact path='/product/:id' component={Item} />
          )}
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);

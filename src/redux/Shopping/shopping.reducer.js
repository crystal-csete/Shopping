/** @format */

import * as actionTypes from "./shopping-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "This is the best keyboard ever",
      description:
        "This keyboard is wireless. It has soft keys, so you don't get bothered by your own typing.",
      price: 29.0,
      image:
        "https://images.unsplash.com/photo-1561112077-7b6f1d8cc0e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGtleWJvYXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 2,
      title: "Futuristic mouse to impress your coworkers",
      description: "This modern mouse will impress everyone, it is awesome!",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 3,
      title: "Super bright monitor with great color and clarity",
      description:
        "You will not miss a thing with this monitor. It has great color and clarity to offer you.",
      price: 229.0,
      image:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (prod) => prod.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

import React from "react";



import "./index.css";

import Cart from "./cart";

import { Provider } from "react-redux";

import store from "./store";
/*
import ReactDOM from "react-dom";
ReactDOM.render(
  <Provider store={store}>
    <Cart/>
  </Provider>,

  document.getElementById("root")
);*/
const AddCart=()=>
{
    return(
      <Provider store={store}>
      <Cart/>
    </Provider>
    )
}
export default AddCart;
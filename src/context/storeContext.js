import React from "react";
// import { useState } from "react";

// Context describes the data and functions that will exist in store
// Only definitions, no implementation here

// const [cart, setCart] = useState([]);
// const [user, setUser] = useState({});
// const myAddProduct = () => {};
// const myRemoveProduct = () => {};

const storeContext = React.createContext({
  cart: [],
  user: {},
  addProduct: (product) => {},
  removeProduct: (productId) => {},
});

export default storeContext;

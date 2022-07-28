import "./cart.css";
import { useContext } from "react";
import storeContext from "../context/storeContext";
import ProductInCart from "./productInCart";

const Cart = () => {
  const {cart} = useContext(storeContext);

  const getCount = () => {
    let count = 0;
    for(let i=0; i<cart.length; i++) {
      let count = cart[i].quantity;
      return count;
    };
  };
    return(
      <div className="cart-page">
         <h1>Did You Get Everything? Please pay here.</h1>
         <h5>You have {getCount()} products in your cart</h5>

         <ul>
           {cart.map((product) =>(
            <ProductInCart key={product.id} data={product}></ProductInCart>
            ))}
         </ul>
      </div>
    );
};
    



export default Cart;



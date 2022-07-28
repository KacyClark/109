import "./productInCart.css";
import storeContext from "../context/storeContext";
import {useContext} from "react";



const ProductInCart = (props) => {
    const {removeProduct} = useContext(storeContext);
    
    const removeFromCart = () => {
        removeProduct(props.data._id);
    }
    return(
        <div className="product-cart">
            <img src={"/images/" + props.data.image} alt="image-here" />
            <div>
            <p>Product: {props.data.title}</p>
            <p>Category: {props.data.category}</p>
            </div>
            <label>Price: ${props.data.price}</label>
            <label>Quantity: #{props.data.quantity}</label>
            <label>Total:  ${(props.data.price * props.data.quantity).toFixed(2)}</label>

            <button onClick={removeFromCart} className="btn btn-sm btn danger">Remove</button>
        </div>
    );
};


export default ProductInCart;





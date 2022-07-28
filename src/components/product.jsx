import "./product.css";
import QuantityPicker from './quantityPicker';
import { useState, useContext } from 'react';
import storeContext from "./../context/storeContext";

const Product = (props) => {
    let[quantity, setQuantity] = useState(1);
    const {addProduct, removeProduct} = useContext(storeContext);
    // let globalAddProd = useContext(StoreContext).addProduct;
    // globalAddProd(props.data);     // call the global function

    const quantityChange = (value) => {
        setQuantity(value);
        };

       
    const getTotal = () => {
        let total = props.data.price * quantity; 
        return total.toFixed(2);  
    };    
    const handleAdd = () => {
        let prod4Cart = {...props.data, quantity: quantity};   //alt= {...props.data,quantity: quantity};
        
        addProduct(prod4Cart);
       
    };
    return (
        <div className="product">
            <img src={"/images/" + props.data.imageUrl} alt="Product" />
            <h2>{props.data.title}</h2>
            <label className="fw-light fs-6">Price : ${props.data.price.toFixed(2)}</label>
            <label className="fw-light fs-6">Total : ${getTotal()}</label>
            <QuantityPicker id="qp"onChange={quantityChange}></QuantityPicker>
            <button onClick={handleAdd} className="btn btn-secondary btn-sm">Add</button>
        </div>
    );
 };
    export default Product;

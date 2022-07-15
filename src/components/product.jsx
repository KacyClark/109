import "./product.css";
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product = (props) => {
    let[quantity, setQuantity] = useState(1);

    const quantityChange = (value) => {
        setQuantity(value);
        };

       
    const getTotal = () => {
        let total = props.data.price * quantity; 
        return total.toFixed(2);  
    }    

    return (
        <div className="product">
            <img src={"/images/" + props.data.imageUrl} alt="Product" />
            <h2>{props.data.title}</h2>
            <label class="fw-light fs-6">Price : ${props.data.price.toFixed(2)}</label>
            <label class="fw-light fs-6">Total : ${getTotal()}</label>
            <QuantityPicker id="qp"onChange={quantityChange}></QuantityPicker>
            <button className="btn btn-secondary btn-sm">Add</button>
        </div>
    );
 }
    export default Product;

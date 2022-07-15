import {useState} from 'react';
import './quantityPicker.css';

const QuantityPicker = (props) => {

    let[quantity, setQuantity] = useState(1);

    const handleIncrease=()=>{
        let value = quantity +1;
        setQuantity(value);
        props.onChange(value);
    };
    const handleDecrease=()=>{
        let value = quantity -1;
        if(value >0){
            setQuantity(value);
            props.onChange(value);
        };
    };    

    return (
        <div className="quantityPicker">
            <button className="btn btn-secondary btn-sm" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
             <button className="btn btn-secondary btn-sm" onClick={handleIncrease}>+</button>
        </div>
    );
};

export default QuantityPicker;
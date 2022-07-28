import { useState } from "react";
import storeContext from "./storeContext";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});
    const myAddProduct =(product) => {
        console.log("Global add product");
        
        let copyCart = [...cart];
        let found = false;
        for (let i = 0; i < copyCart.length; i++) {
            let existingProd = copyCart[i];
            if(product.id === existingProd.id){
                existingProd.quantity += product.quantity;
                found = true;
            }
        }
        if(!found){
            copyCart.push(product);
        }
        setCart(copyCart);

    };
    const myRemoveProduct =(productId) => {
        console.log("Global remove product");
        
        let copyCart = [...cart];
        for (let i=0; i<copyCart.length; i++) {
            let prod = copyCart[i];
            if (prod._id == productId) {
                copyCart.splice(i, 1);
            }
            setCart(copyCart);
        };
    };
    return (
        <storeContext.Provider value={{
            cart: cart,
            user: user,
            addProduct: myAddProduct,
            removeProduct: myRemoveProduct
        }}>
            {props.children}
        </storeContext.Provider>
    );
};
export default GlobalState;
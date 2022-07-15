import "./admin.css";
import { useState } from "react";

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});  
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState({}); 

    const saveProduct = () => {
        console.log("Saving product", product);

        let copy = {...allProducts};
        copy.push(product);
        setAllProducts(copy);
        let copy = {...product};
        copy.price = parseFloat(copy.price);
        console.log
    };  
    const textChanged = (e) => {
       let name = e.target.name;
       let val = e.target.value;

       let copy = {...product};
       copy[name] = val;
       setProduct(copy);
    };
};
// ToDo: send the product to service, which sends to backend

const couponChanged = (e) -> {
    let name = e.target.name;
    let val = e.target.value;

    let copy = {...coupon};
    copy[name] = val;
    setCoupon(copy);
};
const saveCoupon = () => {
    console.log("Applying coupon", coupon);

    let copy = [...coupon];
    let discount = parseFloat(copy.discount);
    copy.discount = discount;
    console.log(copy);
};    

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);

        
        // send the coupon to service -> backend
       
    return (
        <div className="admin-page">
            <h3>Store Administration</h3>

        <div className="parent">
            <section className="products">
                <h4>Register New Product</h4>

                    <div className="field">
                        <label>Title</label>
                        <input name="title" onChange={textChanged} className="form-control" type="text" />
                    </div> 

                    <div className="field">
                        <label>Category</label>
                        <input name="category" onChange={textChanged} className="form-control" type="text" />
                    </div>

                    <div className="field">
                        <label>Image</label>
                        <input name="image" onChange={textChanged} className="form-control" type="text" placeholder="image name"/>
                    </div>

                    <div className="field">
                        <label>Price</label>
                        <input name="price" onChange={textChanged} className="form-control" type="number" />
                    </div>

                    <div className="button"> 
                        <button onClick={saveProduct} className="btn-btn-secondary">Register Product</button>
                    </div> 
                    
                    <br></br>

                    <ul>
                         {allProducts.map((prod, index) => <li key={index}> {prod.title} - {prod.price}</li>)}

                    </ul>

            </section>
    );
};

        // send the coupon to service -> backend
    
    return (
        <section className="coupons">
            <h3>Coupon Codes</h3>
                <div className="form">
                    <label>Code</label>
                    <input name="code" onChange={couponChanged} className="form-control" type="text" />
                </div>

                <div className="field">
                    <label>Discount/label>
                    <input name="discount" onChange={couponChanged} className="form-control" type="number" />
                </div>
                <div className="button"> 
                        <button onClick={saveCoupon} className="btn-btn-secondary">Register Coupon</button>
                </div>

                <br/>
                <ul>
                    {allCoupons.map((coupon) => {
                        <li>key={coupon.code}
                            {coupon.code} - {coupon.discount}
                        </li>
                    ))}
                </ul>
                <ul>
                     {products.map((product) => {
                         <li>{product.title} - {product.price}
                         </li>            
                     )}
                </ul>
        </section>    
    </div>
    </div> 
};


export default Admin;
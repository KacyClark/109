import "./admin.css";
import { useState } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const textChanged = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  };
  const saveProduct = () => {
    let copy = { ...product };
    copy.price = parseFloat(copy.price);
    console.log(copy);

    let service = new DataService();
    service.saveProduct(copy);

    let newProds = { ...allProducts };
    newProds.push(copy);
    setAllProducts(newProds);
  };
  // ToDo: send the product to service, which sends to backend

  const couponChanged = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    let copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  };
  const saveCoupon = () => {
    let newCoupon = [...coupon];
    let discount = parseFloat(newCoupon.discount);
    newCoupon.discount = discount;
    console.log(newCoupon);

    let copy = [...allCoupons];
    copy.push(newCoupon);
    setAllCoupons(copy);
    // send the coupon to service -> backend
  };
  return (
    <div className="admin-page">
      <h3>Store Administration</h3>
      <div className="parent">
        <section className="products">
          <h3>Register New Product</h3>

          <div className="field">
            <label>Title</label>
            <input
              name="title"
              onChange={textChanged}
              className="form-control"
              type="text"
            />
          </div>

          <div className="field">
            <label>Category</label>
            <input
              name="category"
              onChange={textChanged}
              className="form-control"
              type="text"
            />
          </div>

          <div className="field">
            <label>Image</label>
            <input
              name="image"
              onChange={textChanged}
              className="form-control"
              type="text"
              placeholder="image name"
            />
          </div>

          <div className="field">
            <label>Price</label>
            <input
              name="price"
              onChange={textChanged}
              className="form-control"
              type="number"
            />
          </div>

          <div className="button">
            <button onClick={saveProduct} className="btn-btn-secondary">
              Register Product
            </button>
          </div>

          <br></br>

          <ul>
            {allProducts.map((prod, index) => (
              <li key={index}>
                {" "}
                {prod.title} - ${prod.price}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="coupons">
        <h3>Coupon Codes</h3>
        <div className="form">
          <label>Code</label>
          <input
            name="code"
            onChange={couponChanged}
            className="form-control"
            type="text"
          />
        </div>

        <div className="field">
          <label>Discount</label>
          <input
            name="discount"
            onChange={couponChanged}
            className="form-control"
            type="number"
          />
        </div>
        <div className="coupon-list">
          <ul>
            {allCoupons.map((coupon) => (
              <li>
                key={coupon.code} {coupon.code} - {coupon.discount}% off
              </li>
            ))}
          </ul>
        </div>
        <div className="button">
          <button onClick={saveCoupon} className="btn-btn-secondary">
            Register Coupon
          </button>
        </div>
      </div>
      );
    </div>
  );
};

export default Admin;

import './navbar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import storeContext from "../context/storeContext";

const Navbar = () => {
  const {cart, user}= useContext(storeContext);

  const getCount = () => {
    let count = 0;
    for(let i=0; i<cart.length; i++) {
      let prod = cart[i];    //count += cart[i].quantity
    count += prod.quantity;
    };
    return count;
  };
   

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container-fluid">
        <button className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">Catalog
            </Link>
          </li>

        </ul>
        <form className="d-flex" role="search">
          <Link className="btn btn-outline-light" to="/cart">
        <span className="badge bg-secondary">View Cart {getCount()}</span>
        </Link>
        </form>
        
      </div>
    </div>
  </nav>
    );
    
};


export default Navbar;



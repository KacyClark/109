import {useEffect, useState} from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";

const Catalog = () => {
  let [products, setProducts] = useState([]);

const loadCatalog = async () => {
  let service = new DataService();
  let data = service.getCatalog();
    setProducts(data);
};
  useEffect(() => {
    loadCatalog();
  }, []);

  return (
  <div className="catalog-container">
    <h2>Our Fabulous Catalog</h2>
    <h3>We have {products.length} products</h3>

    <div className="products-container">
        {products.map((prod) => (
        <Product key={prod.id} data={prod}></Product>
      ))}
    </div>
  </div>
  );
};
export default Catalog;
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import Home from "./components/home";
import Cart from "./components/cart";
import Nursery from "./components/nursery";
import Puppyatrics from "./components/puppyatrics";
import Admin from "./components/admin";
import ToDo from "./components/todo";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
        <div className="App">
    <header className="App-header">
        <h1>Welcome to Chiwowwows and More!</h1>
    </header>
      <BrowserRouter>
         <Navbar className="navbar">
         </Navbar>

         <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/cart" element={ <Cart /> }></Route>
            <Route path="/catalog" element={ <Catalog /> }></Route>
            <Route path="/about" element= { <About/> } ></Route>
            {/* <Route path="puppyatrics" element= { <Puppyatrics/> } ></Route> */}
            {/* <Route path="nursery" element={ <Nursery/>}></Route> */}
         </Routes>

         <Footer>

         </Footer>
      </BrowserRouter>
    </div>  
  );
};

export default App;

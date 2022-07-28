import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import Home from "./components/home";
import Cart from "./components/cart";
import Admin from "./components/admin";
import GlobalState from "./context/globalState";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

 <header className="App-header">
        <h1>Welcome to Chiwowwows and More!</h1>
    </header>
  const App = () => {
    return (
      <div className="App">
        <GlobalState>      
          <BrowserRouter>
            <Navbar className="navbar">
            </Navbar>

             <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/cart" element={ <Cart /> }></Route>
                <Route path="/catalog" element={ <Catalog /> }></Route>
                <Route path="/about" element= { <About/> } ></Route>
                <Route path="admin" element={ <Admin /> }></Route>
             </Routes>

            <Footer>
            </Footer>
           </BrowserRouter>
        </GlobalState> 
      </div>  
  );
};

export default App;

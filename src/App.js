import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'
import Cart from './Cart.jsx';
import SignUp from './SignUp.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchedItem, searchItem] = useState("");

  const [cartItems, setCartItems] = useState([]);

  // add products to shoping cart
  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // remove products from shoping cart
  const removeFromCart = (product, removeAll = false) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (removeAll || exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x
        )
      );
    }
  };

  return (
    <Router>
        <Header setSelectedCategory={setSelectedCategory} cartItems={cartItems} searchItem={searchItem}/>
         <Routes>
          <Route 
            path='/' 
            element={
              <Body 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                addToCart={addToCart}
                searchedItem={searchedItem}
              />
            }> 
          </Route>

          <Route 
            path='/cart' 
            element={
              <Cart 
              cartItems={cartItems} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart}
              />
            }>
          </Route> 

          <Route 
            path='/sign-up'
            element={
            <SignUp></SignUp>
            }
          >
          </Route> 
         </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;

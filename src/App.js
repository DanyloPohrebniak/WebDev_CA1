import logo from './logo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cartItems, setCartItems] = useState([]);

  // add to cart function
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // remove function
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Header setSelectedCategory={setSelectedCategory} cartItems={cartItems} />
      <Body selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} addToCart={addToCart}/>
      <Footer />
    </div>
  );
}

export default App;

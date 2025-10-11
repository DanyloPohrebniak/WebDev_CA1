import logo from './logo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Plants");

  return (
    <div className="App">
      <Header setSelectedCategory={setSelectedCategory} />
      <Body selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Footer />
    </div>
  );
}

export default App;

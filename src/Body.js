// components/Body.jsx
import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import ProductCard from "./ProductCard"; 
import products from './data/products.json';

function Body({ selectedCategory, setSelectedCategory, addToCart }) {

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <MDBContainer fluid className="my-5 text-center">
      
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => setSelectedCategory("All")}>All</Button>
        <Button variant="secondary" onClick={() => setSelectedCategory("Plants")}>Plants</Button>
        <Button variant="secondary" onClick={() => setSelectedCategory("Tools")}>Tools</Button>
        <Button variant="secondary" onClick={() => setSelectedCategory("Garden Care")}>Garden Care</Button>
      </ButtonGroup>

      <h4 className="mt-4 mb-5">
        <strong>{selectedCategory} Product List</strong>
      </h4>

      <MDBRow>
        {filteredProducts.map((product, index) => (
          <MDBCol key={index} md="6" lg="4" className="mb-4">
            <ProductCard {...product} product={product} addToCart={addToCart}/>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Body;

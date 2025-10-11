// components/Body.jsx
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import ProductCard from "./ProductCard"; 

function Body() {
  const products = [
    {
      image: "./images/onion.jpg",
      badges: [
        { label: "New", color: "bg-primary" },
        { label: "Eco", color: "bg-success" }
      ],
      title: "Onion",
      category: "Plant's seeds",
      price: "€0.99",
    },
    {
      image: "./images/beetroot.webp",
      badges: [
        { label: "Eco", color: "bg-success" }
      ],
      title: "Beetroot",
      category: "Plant's seeds",
      price: "€1.50",
    },
    {
      image: "./images/cucumber.jpg",
      badges: [
        { label: "Eco", color: "bg-success" },
        { label: "-10%", color: "bg-danger" }
      ],
      title: "Cucumber",
      category: "Plant's seeds",
      price: "€0.99",
      discountedPrice: "€0.89",
    },
    {
      image: "./images/carrots.webp",
      badges: [
        { label: "Eco", color: "bg-success" },
        { label: "-10%", color: "bg-danger" },
      ],
      title: "Carrot",
      category: "Plant's seeds",
      price: "€0.99",
      discountedPrice: "€0.89",
    },
    {
      image: "./images/cabbage.webp",
      badges: [{ label: "Eco", color: "bg-success" }],
      title: "Cabbage",
      category: "Plant's seeds",
      price: "€3.00",
    },
    {
      image: "./images/pepper.jpg",
      badges: [
        { label: "New", color: "bg-primary" },
        { label: "Eco", color: "bg-success" },
        { label: "-10%", color: "bg-danger" },
      ],
      title: "Chilly Pepper",
      category: "Plant's seeds",
      price: "€2.99",
      discountedPrice: "€2.69",
    },
  ];

  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Product List</strong>
      </h4>

      <MDBRow>
        {products.map((product, index) => (
          <MDBCol key={index} md="6" lg="4" className="mb-4">
            <ProductCard {...product} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Body;

// components/ProductCard.jsx
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple, 
} from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';

function ProductCard({
  image,
  badges = [],
  title,
  category,
  price,
  discountedPrice = null,
}) {
  return (
    <MDBCard>
      <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom">
        <MDBCardImage src={image} fluid className="w-100" style={{height: 500}} />
        <a href="#!">
          <div className="mask">
            <div className="d-flex justify-content-start align-items-end h-100">
              <h5>
                {badges.map((badge, index) => (
                  <span key={index} className={`badge ${badge.color} ms-2`}>
                    {badge.label}
                  </span>
                ))}
              </h5>
            </div>
          </div>
          <div className="hover-overlay">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <a href="#!" className="text-reset">
          <h5 className="card-title mb-3">{title}</h5>
        </a>
        <a href="#!" className="text-reset">
          <p>{category}</p>
        </a>
        <h6 className="mb-3">
          {discountedPrice ? (
            <>
              <s>{price}</s>
              <strong className="ms-2 text-danger">{discountedPrice}</strong>
            </>
          ) : (
            price
          )}
        </h6>
        <Button variant="success">
          Buy now
        </Button><br></br>
        <Button variant="secondary" style={{marginTop: 10 }}>
          Add to cart
        </Button>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ProductCard;

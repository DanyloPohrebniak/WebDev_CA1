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
  addToCart,
  product
}) {
  return (
    <MDBCard className="h-100 shadow-sm">
      <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom">
        <MDBCardImage src={image} fluid className="w-100" style={{ height: 350, objectFit: "contain" }} />
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
      </MDBRipple>

      <MDBCardBody>
        <a>
          <h5 className="card-title mb-3">{title}</h5>
        </a>
        <a className="text-muted">
          <p>{category}</p>
        </a>
        <h6 className="mb-3">
          {discountedPrice ? (
            <>
              <s className="text-muted">€{price.toFixed(2)}</s>
              <strong className="ms-2 text-danger">€{discountedPrice.toFixed(2)}</strong>
            </>
          ) : (
            <strong>€{price.toFixed(2)}</strong>
          )}
        </h6>

        <Button variant="success"  onClick={() => addToCart(product)}>
          Add to cart
        </Button>

      </MDBCardBody>
    </MDBCard>
  );
}

export default ProductCard;

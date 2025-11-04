import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Cart({ cartItems, addToCart, removeFromCart }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 2.99 : 0;
  const total = subtotal + shipping;

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#f8f9fa" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-start h-100 g-4">
          
          <MDBCol lg="8">
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center py-5 muted">
                      Your cart is empty 
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-3"
                            style={{ width: "100px" }}
                          />
                          <div className="ms-3">
                            <p className="mb-1 fw-bold">{item.name}</p>
                            <p className="text-muted mb-0">{item.category}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex flex-row align-items-center">
                          <MDBBtn className="px-2" color="link" onClick={() => removeFromCart(item)}>
                            <FontAwesomeIcon icon={faMinus} />
                          </MDBBtn>

                          <MDBInput
                            readOnly
                            type="number"
                            size="sm"
                            style={{ width: "50px" }}
                            value={item.quantity}
                          />

                          <MDBBtn className="px-2" color="link" onClick={() => addToCart(item)}>
                            <FontAwesomeIcon icon={faPlus} />
                          </MDBBtn>

                          <MDBBtn color="link" onClick={() => removeFromCart(item, true)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </MDBBtn>
                        </div>
                      </td>
                      <td className="align-middle">
                        <strong>€{(item.price * item.quantity).toFixed(2)}</strong>
                      </td>
                    </tr>
                  ))
                )}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>

          <MDBCol lg="4">
            <MDBCard className="shadow-2-strong" style={{ borderRadius: "16px" }}>
              <MDBCardBody className="p-4">
                <h5 className="mb-4">Payment Summary</h5>

                <div className="d-flex justify-content-between">
                  <p>Subtotal</p>
                  <p>€{subtotal.toFixed(2)}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p>Shipping</p>
                  <p>€{shipping.toFixed(2)}</p>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>€{total.toFixed(2)}</strong>
                </div>

                <Button block variant='success' size="lg" disabled={cartItems.length === 0} as={Link} to="/payment">
                  Proceed to payment
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </section>
  );
}

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from 'react-router-dom';

import "./Payment.css";


const CreditCard = ({ clearCart }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // handles name input
  const handleName = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    if (value.length <= 20) setName(value);
  };

  // handles card number input
  const handleNumber = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 16) setNumber(value);
  };

  // handles expiration date input
  const handleDate = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    setDate(value);
  };

  // handles cvc code input
  const handleCvc = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) setCvc(value);
  };

  // validate all input in payment form
  const validateForm = () => {
    const newErrors = {};
    if (name.length < 3) newErrors.name = "Name is too short";
    if (number.length !== 16) newErrors.number = "Card number has to contain 16 digits";
    if (!/^\d{2}\/\d{2}$/.test(date)) newErrors.date = "Date has to be in MM/YY format";
    if (cvc.length !== 3) newErrors.cvc = "CVC must contain 3 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handles pay button and cleans a cart
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Successfull payment!");
    }
    clearCart();
    navigate("/")
  };

  return (
    <div className="payment-page">
      <div className="payment-form-container">
        <Cards
          number={number}
          name={name}
          expiry={date}
          cvc={cvc}
          focused={focus}
        />

        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              value={number}
              name="number"
              onChange={handleNumber}
              onFocus={(e) => setFocus(e.target.name)}
            />
            {errors.number && <p className="payment-error">{errors.number}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Card Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={handleName}
              onFocus={(e) => setFocus(e.target.name)}
            />
            {errors.name && <p className="payment-error">{errors.name}</p>}
          </div>

          <div className="row">
            <div className="col-sm-6 mb-3">
              <label htmlFor="expiry" className="form-label">Expiration Date</label>
              <input
                type="text"
                name="expiry"
                className="form-control"
                value={date}
                onChange={handleDate}
                onFocus={(e) => setFocus(e.target.name)}
                placeholder="MM/YY"
              />
              {errors.date && <p className="payment-error">{errors.date}</p>}
            </div>

            <div className="col-sm-6 mb-3">
              <label htmlFor="cvc" className="form-label">CVC</label>
              <input
                type="tel"
                name="cvc"
                className="form-control"
                value={cvc}
                onChange={handleCvc}
                onFocus={(e) => setFocus(e.target.name)}
              />
              {errors.cvc && <p className="payment-error">{errors.cvc}</p>}
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100 mt-3">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreditCard;

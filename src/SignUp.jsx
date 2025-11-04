import React, { useState, useContext } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { UserContext } from '../src/data/userData.jsx'

export default function SignUp() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // handles name input
  const handleName = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    if (value.length <= 20) setName(value);
  };

  // handles number input
  const handleNumber = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    if (value.length <= 10) setNumber(value);
  };

  // handles sing up data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || number.length !== 10) {
      alert('Please enter valid name and 10-digit number');
      return;
    }
    setUser({ name, number });
    navigate('/');
  };

 

  return (
    <div 
      className="d-flex justify-content-center align-items-center-start vh-75"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div 
        className="text-center p-4 rounded-4 shadow"
        style={{ width: "350px", backgroundColor: 'white', border: '1px solid #dee2e6' }}
      >
        <h4 className="mb-4">Sign In</h4>
        <form onSubmit={handleSubmit}>
          <MDBInput 
            className='mb-4' 
            type='text' 
            id='formName'
            placeholder='Name (only letters, max 20)'
            value={name}
            onChange={handleName}
          />

          <MDBInput 
            className='mb-4' 
            type='text' 
            id='formNumber' 
            placeholder='Phone number (10 digits)'
            value={number}
            onChange={handleNumber}
            inputMode="numeric"
          />

          <Button variant='success' size="lg" type='submit'>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

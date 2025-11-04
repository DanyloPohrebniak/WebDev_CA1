import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function SignUp() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
        <form>
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

          <MDBBtn type='submit' block>
            Sign in
          </MDBBtn>
        </form>
      </div>
    </div>
  );
}

import React from 'react';
import './Form.css';
import successimg from "../../../src/assets/HackBout.svg"

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Thankyou..We recieved your form details</h1>
      <img className='form-img-2' src={successimg} alt='success-image' />
    </div>
  );
};

export default FormSuccess;

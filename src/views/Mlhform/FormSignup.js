import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 style={{fontSize:"50px", textAlign:"center"}}>
        <span className="green">Registration</span> Form
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Devfolio Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your Devfolio username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your first name'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.firstname}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your last name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.lastname}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Age</label>
          <input
            className='form-input'
            type='text'
            name='age'
            placeholder='Enter your age in years'
            value={values.age}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.age}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Institution</label>
          <input
            className='form-input'
            type='text'
            name='school'
            placeholder='Enter your Institution'
            value={values.school}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.school}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label' for="phone">Phone Number</label>
          <input
            className='form-input'
            type='tel'
            name='phone'
            id='phone'
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder='Enter your Phone number'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.phone}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Country</label>
          <input
            className='form-input'
            type='text'
            name='country'
            placeholder='Enter your Country'
            value={values.country}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.country}</p>}
        </div>
        <div className='form-inputs' style={{marginTop:"34px"}}>
          <input
            // className='form-input'
            type='checkbox'
            name='country'
            
            
            placeholder='Enter your Country'
            // value={values.country}
            // onChange={handleChange}
          />
          <label className='form-label' style={{fontSize:"15px"}}><span style={{color:"#FB8122"}}>MLH Code of Conduct</span>: I have read and agree to the <a target="_blank" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" style={{color:"rgb(39, 176, 255)"}}>MLH Code of Conduct</a></label>

        </div>
        <div className='form-inputs' >
          <input
            // className='form-input'
            type='checkbox'
            name='country'
            
            
            placeholder='Enter your Country'
            // value={values.country}
            // onChange={handleChange}
          />
          <label className='form-label' style={{fontSize:"15px"}}><span style={{color:"#FB8122"}}>Event Logistics Information</span>: I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the <a target="_blank" href="https://mlh.io/privacy" style={{color:"rgb(39, 176, 255)"}}>MLH Privacy Policy</a>. I further agree to the terms of both the <a target="_blank" href="https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions" style={{color:"rgb(39, 176, 255)"}}>MLH Contest Terms and Conditions</a> and the <a target="_blank" href="https://mlh.io/privacy" style={{color:"rgb(39, 176, 255)"}}>MLH Privacy Policy</a></label>

          {/* {errors.username && <p>{errors.country}</p>} */}
        </div>
        <div className='form-inputs' >
          <input
            // className='form-input'
            type='checkbox'
            name='country'
            
            // fb8122
            placeholder='Enter your Country'
          />
          <label className='form-label' style={{fontSize:"15px"}}><span style={{color:"#FB8122"}}>Communication from MLH</span>: I authorize MLH to send me pre- and post-event informational emails, which contain free credit and opportunities from their partners</label>

        </div>
        
 
        

        {/* <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div> */}
        <button className='form-input-btn' type='submit'>
        Submit
        </button>
        {/* <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span> */}
      </form>
    </div>
  );
};

export default FormSignup;

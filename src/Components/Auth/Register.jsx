import React, { Component } from 'react';
import { Alert, Button, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './auth.css';

class Register extends Component {
  render() {
    return (
        <>

        <div className="mt-5 shadow"></div>
          <div className="login-block">
              <h1>User Registration</h1>
  
  
              <form style={{ paddingBottom : '10px' }}>
                <input type="email" value='' placeholder="Email" id="username" />
  
                <input type="password" value='' placeholder="Password" id="password" />
  
                <Button id='submit-btn' type='submit' className='btn-info'>Register</Button>
              </form>
              <hr />
              <Link to="/" style={{ textDecoration: 'none', color : 'black' }}>User Login</Link>
        </div>
        
        </>
    )
  }
};


export default Register;

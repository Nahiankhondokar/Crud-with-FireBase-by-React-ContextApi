import React from 'react';
import { Alert, Button, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {
  return (
    <>
      <div className="mt-5 shadow"></div>
        <div className="login-block">
            <h1>User Login</h1>
            
            <form>
              <input type="text" value='' placeholder="Email" id="username" />

              <input type="password" value='' placeholder="Password" id="password" />

              <Button id="submit-btn" type='submit' className='btn-info'>LogIn</Button>
            </form>
            
            <hr />
            <Link to='/register' style={{ textDecoration: 'none', color : 'black' }}>Create an Account</Link>
        </div>


            
    </>
  )
};

export default Login;
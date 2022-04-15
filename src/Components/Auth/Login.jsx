import React, { useContext } from 'react';
import { Alert, Button, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StudentContext } from '../../StudentContext/StudentContext';
import './auth.css';

const Login = () => {

  const [ login, setLogin, register, seRregister ] = useContext(StudentContext);

  return (
    <>
      <div className="mt-5 shadow"></div>
        <div className="login-block">
            <h1>User Login</h1>
            
            <form>
              <input type="text" value={ login.email } onChange={ e => { setLogin({ ...login, email : e.target.value }) } } placeholder="Email" id="username" />

              <input type="password" value={ login.password } onChange={ e => { setLogin({ ...login, password : e.target.value }) } } placeholder="Password" id="password" />

              <Button id="submit-btn" type='submit' className='btn-info'>LogIn</Button>
            </form>
            
            <hr />
            <Link to='/register' style={{ textDecoration: 'none', color : 'black' }}>Create an Account</Link>
        </div>


            
    </>
  )
};

export default Login;
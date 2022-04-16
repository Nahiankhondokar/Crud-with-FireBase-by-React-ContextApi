import React, { useContext } from 'react';
import { Alert, Button, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StudentContext } from '../../StudentContext/StudentContext';

const Register = () => {

  const [ login, setLogin, register, seRegister, handleRegisterSubmit, alert, setAlert, handleAlertClose ] = useContext(StudentContext);


  return (
    <>

        <div className="mt-5 shadow"></div>
          <div className="login-block">
              <h1>User Registration</h1>
  
              {
                alert.status && <Alert className='d-flex justify-content-between' variant={ alert.type }>{ alert.msg }  <CloseButton onClick={ handleAlertClose }></CloseButton></Alert> 
              }
  
              <form onSubmit={ handleRegisterSubmit } style={{ paddingBottom : '10px' }}>
                <input type="email" value={ register.email } onChange={ e => { seRegister({ ...register, email : e.target.value }) } } placeholder="Email" id="username" />
  
                <input type="password" value={ register.password } onChange={ e => { seRegister({ ...register, password : e.target.value }) } } placeholder="Password" id="password" />
  
                <Button id='submit-btn' type='submit' className='btn-info'>Register</Button>
              </form>
              <hr />
              <Link to="/" style={{ textDecoration: 'none', color : 'black' }}>User Login</Link>
        </div>
        
        </>
  )
};

export default Register;

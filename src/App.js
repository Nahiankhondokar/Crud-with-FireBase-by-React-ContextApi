import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './Components/Auth/Register';
import StudentProfile from './Components/Student/StudentProfile';
import Student from './Components/Student/Student';
import Login from './Components/Auth/Login';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { StudentContext } from './StudentContext/StudentContext';
import './App.css';
import { app } from './firebase/firebase';



function App() {

  // get auth
  const auth = getAuth(app);

  // Session Storage Auth
  let data = JSON.parse(sessionStorage.getItem('auth'));

  // Authentication checking
  const [security, setSecurity] = useState(data ? data : false);
  const AuthCheck = ({ children }) => {

    return security ? children : <Navigate to='/' />;

  }


  // nabigate
  const navigate = useNavigate();

  // registration Form
  const [register, seRegister] = useState({
    email : '',
    password : ''
  });

  // alert state
  const [alert, setAlert] = useState({
    msg : '',
    type : '',
    status : false
  });
  const handleAlertClose = () => setAlert(false);


  // login Form
  const [login, setLogin] = useState({
    email : '',
    password : ''
  });



  // User Registraiton
  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if( register.email === '' || register.password === '' ){
      setAlert({
        msg : "Empty Feilds !",
        type : 'danger',
        status : true
      });
    }else{

      // data store
      createUserWithEmailAndPassword(auth, register.email, register.password)
      .then(userCredential => {

      })
      .catch(error => {
        console.log(error);
      });

      // input feilds empty
      seRegister({
        email : '',
        password : ''
      });

      setAlert({
        msg : "Data Added Successfully !",
        type : 'success',
        status : true
      });


    }

  }



  // User Login
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if( login.email === '' || login.password === '' ){
      setAlert({
        msg : "Empty Feilds !",
        type : 'danger',
        status : true
      });
    }else{

      // data store
      signInWithEmailAndPassword(auth, login.email, login.password)
      .then(userCredential => {

        sessionStorage.setItem('auth', JSON.stringify(true));
        
        setSecurity(true);
        navigate('/all-student');

      })
      .catch(error =>{ 
        setAlert({
          msg : "Login Failed !",
          type : 'danger',
          status : true
        });
      });

      // input feilds empty
      setLogin({
        email : '',
        password : ''
      });

      

    }
  }


  // User Lougout
  const handleLogout = () => {
    sessionStorage.removeItem('auth');
    navigate('/');
  }





  return (

    
    <StudentContext.Provider value={[ login, setLogin, register, seRegister, handleRegisterSubmit, alert, setAlert, handleAlertClose, handleLoginSubmit, handleLogout ]}>
      
   
      <Routes>


          <Route path='/' element={ <Login /> }></Route> 
          <Route path='/register' element={ <Register /> }></Route> 
          <Route path='/profile' element={ <StudentProfile /> }></Route> 
          <Route path='/all-student' element={ <AuthCheck> <Student /> </AuthCheck> }></Route> 
          <Route path='*' element={ <Login /> }></Route> 

      </Routes>


   </StudentContext.Provider>


  );
}

export default App;

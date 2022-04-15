import { useEffect, useState } from 'react';
import { StudentContext } from './StudentContext/StudentContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Auth/Register';
import StudentProfile from './Components/Student/StudentProfile';
import Student from './Components/Student/Student';
import Login from './Components/Auth/Login';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './App.css';
import { app } from './firebase/firebase';



function App() {

  // get auth
  const auth = getAuth(app);

  // registration Form
  const [register, seRregister] = useState({
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



  // Registraiton user
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


    }

  }






  return (

    
    <StudentContext.Provider value={[ login, setLogin, register, seRregister, handleRegisterSubmit, alert, setAlert, handleAlertClose ]}>
      
    <BrowserRouter>
      <Routes>


          <Route path='/' element={ <Login /> }></Route> 
          <Route path='/register' element={ <Register /> }></Route> 
          <Route path='/profile' element={ <StudentProfile /> }></Route> 
          <Route path='/all-student' element={ <Student /> }></Route> 


      </Routes>
    </BrowserRouter>

   </StudentContext.Provider>


  );
}

export default App;

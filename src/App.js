import Login from './Components/Auth/Login';
import { StudentContext } from './StudentContext/StudentContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/Auth/Register';
import StudentProfile from './Components/Student/StudentProfile';
import Student from './Components/Student/Student';



function App() {





  return (

    
    <StudentContext.Provider value={[ ]}>
      
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

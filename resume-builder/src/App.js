import React from 'react'
import './App.css';
import Preview from './components/Preview/Preview'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Login from './slices/Login';
import Main from './components/Main/Main';
import {Route,Routes} from 'react-router-dom'
import RegisterForm from './components/LoginRegister/RegisterForm';

function App() {
  return (
    <div className="App p-5">
      <Routes >
        <Route path = '/' element = { <Login/> }/>
        <Route path='/Signup' element={<RegisterForm/>}/>
        <Route path = '/Main' element = { <Main/> }/> 
      </Routes>
      {/* <Header/>
      <Menu/>
      <Preview/> */}
    </div>
  );
  
}

export default App;

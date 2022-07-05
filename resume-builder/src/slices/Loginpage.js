import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from '../App';
import Preview from '../components/Preview/Preview';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';

import './login.css'
function Loginpage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const FormInput = props => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);
  const renderForm = (
    <div className="container">
    <div className="form">
    <div className = "header text-center text-light"> Login</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="text-light mt-3">Username </label>
          <input type="text" description = "username" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label className="text-light mt-3">Password </label>
          <input type="password" description = "password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container mt-5">
          <input type="submit" />
        </div>
      </form>
    </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ?
        <div>
        {/* <div className = "loginSuccess mt-5">User is successfully logged in</div> */}
          <Header/> 
          <Menu/> 
           <Preview/>
        </div>: renderForm
}
      </div>
    </div>
  );
}

export default Loginpage;
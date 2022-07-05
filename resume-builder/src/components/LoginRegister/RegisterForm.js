import React from 'react'
import {useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Axios from "axios";
import '../../slices/login.css'

function RegisterForm() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [confirm_Password, setconfirm_Password] = useState("");
//   useEffect(() => {
//     Axios.get("http://localhost:3001/getUsers").then((response) => {
//       setListOfUsers(response.data);
//     });
//   }, []);

  const writeUser = () => {
    Axios.post("http://localhost:3001/writeUser", {
      name,
      email,
      password,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          email,
          password,
        },
      ]);
      console.log(response.data.status)
      if (response.data.status === 'ok')
      {
        //   setOk(true)
          navigate("/")
      }
      if(response.data.status==="null")
      {
        alert('Details required')
      }
    });
  };

  return (
    <div>
      {/* <div className="UsersDisplay">
        {listOfUsers.map((user) => {
          return (
            // <div>
            //   <h1>name: {user.name}</h1>
            //   <h1>email: {user.email}</h1>
            //   <h1>password: {user.password}</h1>
            //   {/* <h1>Confirm password: {user.confirm_Password}</h1>
            // </div>
          );
        }
        )};
     </div> */}
      <div className='container'>
        <h1 className='text-center mb-5'>Sign Up</h1>
        <div className='d-flex flex-column align-items-center '>
        <input
          type="text"
          placeholder="Name..."
          className='border rounded w-75 '
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
        <input
          type="email"
          className='border rounded py-1 mx-auto mt-3'
          placeholder="Email..."
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <input 
          type="text"
          className='border rounded w-75 mt-3'
          placeholder="Password..."
          onChange={(event) => {
            setpassword(event.target.value);
          }}
        />
        </div>
        <div className='text-center'>
        <button className='btn font-weight-bold mt-5 btn-outline-primary' onClick={writeUser}> Create User </button>
        </div>
        
        <p className='mt-4'>Already have an account? <a href="/" className='text-decoration-none'>Login</a></p>
    </div>
    </div>
);}

export default RegisterForm
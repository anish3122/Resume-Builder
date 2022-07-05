import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate, Route, Routes } from 'react-router-dom'
import Main from '../components/Main/Main';
import './login.css'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
	const [ok,setOk]=useState(false)
    const navigate = useNavigate();

    const writeUser = () => {
        axios.post("http://localhost:3001/Login", {
            email,
            password,
        }).then((response) => {
            console.log("response received")
            console.log(response.data.status)
            if(response.data.status === 'err')
            {
                alert('User does not exist, please signup')
            }
            else if (response.data.status === 'ok')
			{
				setOk(true)
                navigate("/Main")

			}
            else {
                alert("Invalid password")
            }

        });
    };
    return ( 
	<div className='text-center container'>
        <h1 className='mb-5'> Login </h1> 
		<input className = 'input-container border rounded py-1 mx-auto' 
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        type = "email"
        placeholder = "Email"/>
        <br />
        <input className = 'input-container border rounded w-75'
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        type = "password"
        placeholder = "Password"/>
        <br/>
        <div className='text-center'>
        <button className='btn font-weight-bold mt-3 btn-outline-primary' onClick={writeUser}> Login </button>
        </div>
        {/* <button className="btn btn-primary" onClick = { writeUser } > Login </button> */}
        <br/>
        <p className='mt-4'>New here? <a href="/Signup" className='text-decoration-none'>Signup</a></p>
		</div>
		

    )
} 


    export default Login
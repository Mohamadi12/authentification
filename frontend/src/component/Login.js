import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    let navigate=useNavigate()

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const handleLogin=async (values)=>{
        try {
            const res=await axios.post('http://localhost:4000/auth/login',values)
            await localStorage.setItem('token', res.data.token)
            navigate('/private')
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div>
      <main>
<div className="row">
  <div className="colm-logo">
      <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/80206a5e-f20e-4288-89cc-6cf2ee871b00.png?auto=format&q=50&w=128&h=128&fit=max&dpr=3" alt="Logo"/>
      <h2><span>You Account </span>helps you connect and share with the people in your life.</h2>
  </div>
  <div className="colm-form">
      <div className="form-container">
       
      <input type="text" placeholder="Email address " value={email} onChange={(e)=>setEmail(e.target.value)}/>
      
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
     
          <br/>
          <button className="btn-new" type='button' onClick={()=>handleLogin({email,password})}>login  Account</button>
      </div>
  </div>
</div>
</main>
    </div>
  )
}

export default Login

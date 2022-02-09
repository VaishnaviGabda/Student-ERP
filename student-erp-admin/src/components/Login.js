import React, { useState } from 'react';
import { Button, TextField } from '@mui/material'
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handleLogin = () =>{
        
        if (username === "admin" && password === "admin@123") {
          alert("You are successfully logged in!")
          navigate("/dashboard")
        }
        else{
          alert("Invalid credentials!")
        }
    }

  return <div className="student__login">
  <div className="student__login__data">
      <h3>ADMIN LOGIN</h3>
      <TextField id="outlined-basic" value={username} onChange={e => setusername(e.target.value)} label="Enter username" variant="outlined" />
      <TextField id="outlined-basic" type="password" value={password} onChange={e => setpassword(e.target.value)} label="Enter password" variant="outlined" />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
  </div>
  </div>
}

export default Login;

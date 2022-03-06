import "./CreatePasswordPage.css"
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material'
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreatePasswordPage() {


    // const std_id = new URLSearchParams(window.location.search).get('student_id')
    const history = useHistory()

    const [confirm_password, setconfirm_password] = useState("")
    const [password, setpassword] = useState("")
    const [student_id , setstd_id] = useState("")

    const data = {
        "student_id":student_id,
        "password":password
    }

    const createpassword = () =>{
      if(password!=="" && confirm_password!=="")
{
    if(password === confirm_password)
    {
    axios.put("http://localhost:9000/admin/create_new_password",data)
    .then(() =>{
      console.log("Saved..");
    })
    .catch((error) => {
      console.log(error.message);
    })
    setpassword("");
    setconfirm_password("");

   alert("Password created successfully !!")
    history.push("/login")
  }
  else{
    alert("Passwords aren't matching!!")
  }
    
}
else{
    alert("Please fill your details")
}
      
         
       
    }

  return <div className="student__login">
  <div className="student__login__data">
      <h3>Create Password</h3>
      <TextField id="outlined-basic" type="text" value={student_id} onChange={e => setstd_id(e.target.value)} label="Enter student id" variant="outlined" />
      <TextField id="outlined-basic" type="password" value={password} onChange={e => setpassword(e.target.value)} label="Enter password" variant="outlined" />
      <TextField id="outlined-basic" type="password" value={confirm_password} onChange={e => setconfirm_password(e.target.value)} label="Enter confirm password" variant="outlined" />
      <Button variant="contained" onClick={createpassword}>Create Password</Button>
  </div>
  </div>
}


export default CreatePasswordPage
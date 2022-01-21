import React , { useState , useEffect } from 'react';
import enroll_now from './images/enroll_now.jpg'
import './EnrollNow.css'
import axios from 'axios'
import {Form , Button} from 'react-bootstrap'


function EnrollNow() {

    
    const [full_name , setfull_name] = useState("")
    const [email, setemail] = useState("")
    const [phone , setphone] = useState("")
    const [degree , setdegree] = useState("")
     const [branch , setbranch] = useState("")


    const data = {
        "full_name":full_name,
        "email":email,
        "phone":phone,
        "degree":degree,
        "branch":branch

    }


    const submit_data = ()=>{
     if(full_name!=="" && email!=="" && degree!=="" && phone!=="")
{
    axios.post("http://localhost:9000/enrollnow/",data)
    .then(() =>{
      console.log("Saved..");
    })
    .catch((error) => {
      console.log(error.message);
    })
    setfull_name("")
    setemail("")
    setdegree("")
    setphone("")
    setbranch("")

   alert("Your successfully Enrolled !!!")
    
}
else{
    alert("Please fill your details")
}
  }


    useEffect(() => {
        if (degree === "BE" || degree === "Be") {
            document.getElementById("branch").style.display = "block"
        }
        else{
            document.getElementById("branch").style.display = "none"
        }
    }, [degree]);
  return  <div class="enroll_now" id="enroll_now">

      <img src={enroll_now} alt="" />

      <form class="input_fields">
            <h1 id="heading">JOIN US</h1>
            <input placeholder="FULL NAME"  required onChange={e =>setfull_name(e.target.value)}/>
            <input placeholder="EMAIL ADDRESS"  required onChange={e =>setemail(e.target.value)}/>
            <input placeholder="PHONE NUMBER" required onChange={e =>setphone(e.target.value)}/>
            <input placeholder="DEGREE" id="degree_id" list="degree" required onChange={e => setdegree(e.target.value)} />
            <datalist id="degree">
                <option>Bsc</option>
                <option>BE</option>
            </datalist>
            <input placeholder="BRANCH" id="branch" onChange={e =>setbranch(e.target.value)}/>
            <button id="enroll_btn"  onClick={submit_data} type='submit'>ENROLL NOW</button>
        </form>

</div>
}

export default EnrollNow;

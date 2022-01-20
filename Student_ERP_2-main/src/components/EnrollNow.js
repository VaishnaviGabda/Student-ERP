import React , { useState , useEffect } from 'react';
import enroll_now from './images/enroll_now.jpg'
import './EnrollNow.css'



function EnrollNow() {

   const [degree, setdegree] = useState("");

    useEffect(() => {
        if (degree === "BE" || degree === "Be") {
            document.getElementById("branch").style.display = "block"
        }
        else{
            document.getElementById("branch").style.display = "none"
        }
    }, [degree]);
  return  <div class="enroll_now">

      <img src={enroll_now} alt="" />

      <div class="input_fields">
            <h1 id="heading">JOIN US</h1>
            <input placeholder="FULL NAME"/>
            <input placeholder="EMAIL ADDRESS"/>
            <input placeholder="PHONE NUMBER"/>
            <input placeholder="DEGREE" id="degree_id" list="degree" onChange={e => setdegree(e.target.value)}/>
            <datalist id="degree">
                <option>Bsc</option>
                <option>BE</option>
            </datalist>
            <input placeholder="BRANCH" id="branch"/>
            <button id="enroll_btn">ENROLL NOW</button>
        </div>

</div>
}

export default EnrollNow;

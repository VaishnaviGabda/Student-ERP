import React from 'react'
import "./EnrollNow.css"
import bg from './bg.JPG'

function EnrollNow() {
    return (
        <div class="enroll_now">
            <img src={bg}/>
        
            <div class="input_fields">
            <h1 id="heading">JOIN US</h1>
            <input placeholder="FULL NAME"/>
            <input placeholder="EMAIL ADDRESS"/>
            <input placeholder="PHONE NUMBER"/>
            <input placeholder="DEGREE" id="degree_id" list="degree" onChange="handleDegree()"/>
            <datalist id="degree">
                <option>Bsc</option>
                <option>BE</option>
            </datalist>
            <input placeholder="BRANCH" id="branch"/>
            <button id="enroll_btn">ENROLL NOW</button>
        </div>
    </div>
    )
}

export default EnrollNow

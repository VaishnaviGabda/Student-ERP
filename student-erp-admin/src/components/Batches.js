import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import './Batches.css'
import { AiFillEdit } from "react-icons/ai"
import { CgDetailsMore } from "react-icons/cg"
import { useState } from 'react';
import axios from 'axios';

function Batches() {

  const [courses, setCourses] = useState([]);

  const handleDetails = (id) =>{
    axios.get(`http://localhost:9000/admin/get_enrolled_students${id}`)
    .then(res => {
      console.log(res.data[0].students);
    })
  }

  useEffect(() => {
    axios.get("http://localhost:9000/admin/get_courses")
    .then(res => {
      setCourses(res.data);
      console.log(res.data);
    })
  }, []);

  return <div className="batches">
      <Sidebar/>

      <div className="batches__main">
        {courses.map (course => {
          return <div className="batch__data">
          <div className="batch__data__items">
          <div>{course.course_name}</div>
          <div>{course.available_seats} / {course.total_seats}</div>

          <div className="control__btns">
          <div className="btn" id="details__btn" onClick={e=> handleDetails(course._id)}>
            DETAILS
            <CgDetailsMore/>
          </div>
          <div className="btn" id="edit__btn">
            EDIT
            <AiFillEdit/>
          </div>
          </div>
          
          </div>
          </div>
        })}
      </div>
  </div>;
}

export default Batches;

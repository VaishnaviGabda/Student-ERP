import React, { useEffect , useState} from 'react';
import Sidebar from './Sidebar';
import './StudentRequests.css'
import axios from 'axios';
import { BsCheckLg } from "react-icons/bs"
import { ImCross } from "react-icons/im"

function StudentRequests() {

  const [request, setRequest] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/get_requests")
    .then(res => {
      setRequest(res.data);
      console.log(res.data);
    })

    axios.get("http://localhost:9000/admin/get_courses")
    .then(res => {
      setCourses(res.data);
      console.log(res.data);
    })

  }, []);

  const handleAccept = (selected_course, student_id) =>{

    {courses.map(course => {
      if (selected_course === course.course_name && course.available_seats > 0) {
        axios.put("http://localhost:9000/admin/update_seats",
        {"course_id":course._id, "student_id":student_id}
        )
        .then(res => {
          console.log("updated");
        })
        alert(`Added to ${course.course_name} batch!`)
      }
    })}
  }
  
  return <>
  <div className='parent'>
  <Sidebar/>
        <div className="req__main">
        {request.length === 0 ? <h2 id="no_req">No requests</h2> : 
        <div>
        {request.map (data => {
          return <div className="data">
          <div className="data__items">
          <div>{data.full_name}</div>
          <div>{data.course}</div>

          <div className="control__btns">
          <div className="btn" id="accept__btn" onClick={e => handleAccept(data.course, data._id)}>
            ACCEPT
            <BsCheckLg/>
          </div>
          <div className="btn" id="deny__btn">
            DENY
            <ImCross/>
          </div>
          </div>
          
          </div>
          </div>
        })}
        </div>
        }
      </div>
      </div>
      </>
      
  
}

export default StudentRequests;
import React from 'react';
import './Sidebar.css'
import sidebar_bg from './images/side-bar.png'
import { AiOutlineHome } from 'react-icons/ai';
import { BiGitPullRequest } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


function Sidebar() {

  const navigate = useNavigate()

  const handleRequestTab = () =>{
    navigate('/student_requests')
  }

  const handleBatchesTab = () =>{
    navigate('/batches')
  }

  const handleHomeTab = () =>{
    navigate('/dashboard')
  }

  return <div className="sidebar">
    <img src={sidebar_bg}/>

    <div className="sidebar__menu">
      <div className="admin_name">
        <h3>Rahul Ahire</h3>
      </div>

      <div className="menu__item" onClick={handleHomeTab}>
        <AiOutlineHome id="menu__icon"/>
        <p>Home</p>
      </div>

      <div className="menu__item" onClick={handleRequestTab}>
        <BiGitPullRequest id="menu__icon"/>
        <p>Requests</p>
      </div>

      <div className="menu__item" onClick={handleBatchesTab}>
        <BsPeople id="menu__icon"/>
        <p>Batches</p>
      </div>

    </div>
    
  </div>;
}

export default Sidebar;

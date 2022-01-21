import React from 'react';
import home from './images/home.jpg'
import './Home.css'

function Home() {
  return <div className="home">
    <img src={home}/>
    <div className='quotes'>
      <h1>When we come together</h1>
      <h1>there is nothing,</h1>
      <h1>that we cannot achieve.</h1>
    </div>
    <a href="#enroll_now">Enroll Now</a>
  </div>;
}

export default Home;

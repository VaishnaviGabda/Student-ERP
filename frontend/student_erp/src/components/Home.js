import './Home.css'
import React from 'react'
import video from './videos/video.mp4'
import Button from '@material-ui/core/Button';
import { FaArrowRight } from "react-icons/fa";


function Home() {
    return (
<div className='Home'>
  
     
      < video loop autoPlay muted >
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      <div className='navbar'>

          <h1 id="logo">
            
              LinkCode           
        </h1>  
           
       <h1>
              Home
        
    </h1>  
     <h1>
              About
    </h1>   
         <h1>
              Contact Us           
        </h1> 

        <div className='button'>
    <Button 
        href="#">
      <h1 className='login'> Log IN </h1>
      </Button>
      </div>
        
    </div> 


      <h1 className='thought1'>
          When we come together, 
      </h1>
       <h1 className='thought2'>
       there is nothing 
      </h1>

      <h1 className='thought3'>
          that we cannot achieve.
      </h1>

      <div className='button2'>
    <Button 
        href="#">
      <h1 className='enroll'> Enroll Now   <FaArrowRight/>  </h1>
      </Button>
      </div>
        
     
      
         
     
</div> 
         

     
    )
}



export default Home

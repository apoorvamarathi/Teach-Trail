import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


function About({setPlayState}) {
  return (
    <div className='about'>
      <div className='about-left'>
         <img src={about_img} alt="" className='about-img'/>
         <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className='about-right'>
         <h3>About University</h3>
         <h2>Developing well-rounded skills to nurture tomorrow's leaders.</h2>
         <p>In today’s fast-paced world of technology, nurturing the next generation of leaders begins with fostering robust programming skills. </p>
         <p>From Foundation to Mastery
         Supporting aspiring developers doesn’t end with basic lessons. Continuous mentorship, constructive feedback, 
         and progressively challenging projects help transition beginners into adept programmers 
         capable of tackling sophisticated problems.</p>
         <p>Ultimately, nurturing tomorrow’s leaders today means empowering them with the tools,
             knowledge, and mindset they need to face future challenges with confidence.</p>
      </div>
    </div>
  )
}

export default About

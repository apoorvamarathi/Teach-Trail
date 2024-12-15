import React, { useState } from 'react'
import Navbar from './Component/Navabar/Navbar'
import Hero from './Component/Hero/Hero'
import Program from './Component/Program/Program'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import VideoPlayer from './Component/VideoPlayer/VideoPlayer'



const App = () => {
  const [playState,setPlayState] = useState(false);
  return (
   <div className='main-container'>
   <Navbar/>
   <Hero/>
   <Title subTitle="Our PROGRAM" title='What we offer'/>
   <div className='container'>
   <Program/>
   </div>
   <About  setPlayState={setPlayState}/>
   <Title subTitle="Gallery" title='Campus Photos'/>
   <Campus/>
   <Title subTitle="TESTIMONIALS" title="What Student Says"/>
   <Testimonials/>
   <Title subTitle="Contact Us" title="Get in Touch"/>
    <Contact/>
    <Footer/>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
   </div>
  )
}

export default App
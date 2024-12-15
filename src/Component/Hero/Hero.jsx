import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text '>
         <h1>Guiding students to learn better, achieve more, and grow stronger.</h1>
         <p>
         Education is the key to unlocking potential and building a brighter future. 
         It empowers students to grow, explore, and achieve their dreams, turning knowledge into success.</p>
         <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero

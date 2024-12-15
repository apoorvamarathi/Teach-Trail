import React,{useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

   const slider = useRef();
   let tx=0;

const SliderForward  = () =>{
   if(tx>-50){
      tx -= 25;
   }
   slider.current.style.transform = `translateX(${tx}%)`;
}

const SliderBackward  = () =>{
   if(tx<=50){
      tx+=25;
   }
   slider.current.style.transform=`translateX(${tx}%)`
}

  return (
   <div className='test1'>
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={SliderForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={SliderBackward}/>
      <div className="slider">
         <ul ref={slider}>
            <li>
               <div className='slide'>
                  <div className='user-info'>
                     <img src={user_1} alt="" />
                     <div className=''>
                        <h3>William jackson</h3>
                        <span>Teach-trail,USA</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Teach-Trail was one of the best
                      decisions I've ever made. The supportive community, 
                      state-of-the-art facilities, and commitment to academic 
                      excellence have truly exceeded my expectations.</p>
               </div>
            </li>
            <li>
               <div className='slide'>
                  <div className='user-info'>
                     <img src={user_2} alt="" />
                     <div className=''>
                        <h3>William jackson</h3>
                        <span>Teach-trail,USA</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Teach-Trail was one of the best
                      decisions I've ever made. The supportive community, 
                      state-of-the-art facilities, and commitment to academic 
                      excellence have truly exceeded my expectations.</p>
               </div>
            </li>
            <li>
               <div className='slide'>
                  <div className='user-info'>
                     <img src={user_3} alt="" />
                     <div className=''>
                        <h3>William jackson</h3>
                        <span>Teach-trail,USA</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Teach-Trail was one of the best
                      decisions I've ever made. The supportive community, 
                      state-of-the-art facilities, and commitment to academic 
                      excellence have truly exceeded my expectations.</p>
               </div>
            </li>
            <li>
               <div className='slide'>
                  <div className='user-info'>
                     <img src={user_4} alt="" />
                     <div className=''>
                        <h3>William jackson</h3>
                        <span>Teach-trail,USA</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Teach-Trail was one of the best
                      decisions I've ever made. The supportive community, 
                      state-of-the-art facilities, and commitment to academic 
                      excellence have truly exceeded my expectations.</p>
               </div>
            </li>
         </ul>
      </div>
</div>
    </div>
  )
}

export default Testimonials

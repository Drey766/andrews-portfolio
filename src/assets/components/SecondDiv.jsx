import React, { useRef, useState } from 'react'
import './SecondDiv.css'
import {Controller, Scene} from '@farmako/react-scrollmagic'
import profile from './images/2adacbc4-027e-489b-abc9-0f97bc1017c1.png'
import {Parallax, ParallaxProvider} from 'react-scroll-parallax'
import { easeIn, easeOut } from 'framer-motion'

function SecondDiv() {
  const [progresser, setProgress] = useState()
  const refer = useRef(null)

  const handleClick = () => {
    window.scrollTo({ top: 3800, behavior: 'smooth' });
  };
  return (
    <div className='container2'>
        <ParallaxProvider>
          <div className="image-div" ><Parallax className='img-parallax' translateX={[150,0]} opacity={[0,1]} rotateZ={[360, 0]} onProgressChange={(progress) => setProgress(progress)} disabled={progresser===1 ? true: false} startScroll={250} endScroll={700} easing={easeIn}><img src={profile} className="img" id="img01" alt="profile-picture" /></Parallax></div>
            <span className="prof-text" id="prof-text">
                <div className="container2-text">
                  <Parallax translateX={[-300, 0]} opacity={[0,1]} onProgressChange={(progress) => setProgress(progress)} disabled={progresser===1 ? true: false} startScroll={400} endScroll={750} easing={easeIn} >
                    <h2  id="about-h" ref={refer}>ABOUT</h2>
                  </Parallax>
                  <Parallax translateX={[-200, 0]} opacity={[0,1]} onProgressChange={(progress) => setProgress(progress)} disabled={progresser===1 ? true: false} startScroll={300} endScroll={750} easing={easeIn}>
                    <p className="about-text" id="about-p">Hi. I am <span className="name">Andrew Kimani</span> and I am a Front-end Developer with a passion for creating excellent websites and web applications. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                  </Parallax>
                  <Parallax translateX={[-200, 0]} opacity={[0,1]} onProgressChange={(progress) => setProgress(progress)} disabled={progresser===1 ? true: false} startScroll={600} endScroll={850} easing={easeIn}><button type="button" id="get-vpn2" className="about-text" onClick={handleClick}>Contact me</button></Parallax>
          
                </div>
            </span>
        </ParallaxProvider>
    </div>
  )
}

export default SecondDiv
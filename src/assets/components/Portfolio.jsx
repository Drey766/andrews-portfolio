import React, { useState } from 'react';
import './Portfolio.css'
import {Controller, Scene} from '@farmako/react-scrollmagic'
import bookmark from './images/logo-bookmark2.svg'
import sunnyside from './images/logo-sunnyside.svg'
import therapy from './images/Screenshot 2022-10-28 181222.png'
import spaceTourism from './images/Screenshot 2022-11-21 133023.png'
import fooble from './images/Screenshot 2023-06-05 000745.png'
import gym from './images/Screenshot 2022-08-17 000908.png'
import weather from './images/Screenshot 2023-06-05 000107.png'
import trainer from './images/Screenshot 2023-07-07 010247.png'
import twitter from './images/Screenshot 2023-07-10 004310.png'
import premier from './images/New folder/Screenshot 2023-12-05 005042.png'
import tour from './images/New folder/Screenshot 2023-12-05 005323.png'
import gamestoreImg from './images/New folder/Annotation 2024-05-27 210541.png'
import { Button } from '@mui/material';


const Portfolio = () => {
  const [classname, setClassname] = useState('cover');
  const[space, setSpace] = useState('cover')
  const[flooble, setFlooble] = useState('cover')
  const[chirper, setChirper] = useState('cover')
  const[gamestore, setGamestore] = useState('cover')
  const[gymClub, setgymClub] = useState('cover')
  const[weatherApp, setWeatherApp] = useState('cover')
  const[sunnysideDiv, setSunnyside] = useState('cover')
  const[bookmarkDiv, setBookmark] = useState('cover')
  const[premierDiv, setPremiere] = useState('cover')
  const[travelsDiv, setTravels] = useState('cover')
  const[description1, setdescription1] = useState('decription1')
  const[description2, setdescription2] = useState('description2')

  const handleEvent = () => {
    setClassname('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }

  const handleSpace = () => {
    setSpace('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }

  const handleFLooble = () => {
    setFlooble('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }

  const handleChirper = () => {
    setChirper('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }

  const handleGamestore = () => {
    setGamestore('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }

  const handleGym = () => {
    setgymClub('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }

  const handleWeather = () => {
    setWeatherApp('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }

  const handleSunnyside = () => {
    setSunnyside('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }
  

  const handlePremiere = () => {
    setPremiere('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }

  const handleTravels = () => {
    setTravels('cover fade-in')
    setdescription1('description1 show')
    setdescription2('description2 show')
  }

  const handleEvent2 = () => {
    setClassname('cover')
    setBookmark('cover')
    setChirper('cover')
    setFlooble('cover')
    setGamestore('cover')
    setSpace('cover')
    setSunnyside('cover')
    setWeatherApp('cover')
    setgymClub('cover')
    setPremiere('cover')
    setTravels('cover')
    setdescription1('description1')
    setdescription2('description2')
    
  }
  return (
    <div className="container5">
      <Controller>
        <Scene classToggle='fade-in' reverse={false}>
          <h5>PORTFOLIO</h5>
        </Scene>
        <div id="cont5-cont">
        <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs7" onMouseOver={handlePremiere} onMouseLeave={handleEvent2} >
              <div className="image-divs" id="cont5-img7">
                <span className={premierDiv}>
                  <span className={description1}>
                    
                    <p>An e-commerce website for all the latest Clothing. <br /> Built with React js and Firebase</p>
                  </span> 
                  <a className={description2} href="https://premiere-clothing1.web.app/"><Button id='descriptionButton'>Visit website</Button></a>
                </span>
                <img src={premier} onMouseOver={handlePremiere} alt="Jane's therapy" />
              </div>
            </div>
          </Scene>

          <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs8" onMouseOver={handleGamestore} onMouseLeave={handleEvent2} style={{transitionDelay: '0.2s'}}>
              <div className="image-divs" id="cont5-img8" >
                <span className={gamestore}>
                  <span className={description1}>
                    
                    <p>A games store ecommerce website <br /> Built with React, Redux, REST api and Firebase</p>
                  </span>
                  <a className={description2} href="https://gameshop-ultra.web.app"><Button id='descriptionButton'>Visit website</Button></a>
                </span>
                <img src={gamestoreImg} alt="space-tourism" />
              </div>
            
            </div>
          </Scene>

          <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs8" onMouseOver={handleTravels} onMouseLeave={handleEvent2} >
              <div className="image-divs" id="cont5-img8" >
                <span className={travelsDiv}>
                  <span className={description1}>
                    
                    <p>A world tourism webiste. <br /> Built with React and Firebase</p>
                  </span>
                  <a className={description2} href="https://andrews-travels.web.app"><Button id='descriptionButton'>Visit website</Button></a>
                </span>
                <img src={tour} alt="space-tourism" />
              </div>
            
            </div>
          </Scene>
          <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs1" onMouseOver={handleEvent} onMouseLeave={handleEvent2} style={{transitionDelay: '0.2s'}} >
              <div className="image-divs" id="cont5-img1">
                <span className={classname}>
                  <span className={description1}>
                    
                    <p>The official website of Jane's therapy. <br /> Built with HTML/CSS/Javascript</p>
                  </span> 
                  <a className={description2} href="http://jane-therapy.great-site.net/"><Button id='descriptionButton'>Visit website</Button></a>
                </span>
                <img src={therapy} onMouseOver={handleEvent} alt="Jane's therapy" />
              </div>
            </div>
          </Scene>

          <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs2" onMouseOver={handleSpace} onMouseLeave={handleEvent2}>
              <div className="image-divs" id="cont5-img2" >
                <span className={space}>
                  <span className={description1}>
                    
                    <p>A space tourism webiste. <br /> Built with HTML/CSS/Javascript</p>
                  </span>
                  <a className={description2} href="http://space-tourism.great-site.net"><Button id='descriptionButton'>Visit website</Button></a>
                </span>
                <img src={spaceTourism} alt="space-tourism" />
              </div>
            
            </div>
          </Scene>

          <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs3" onMouseOver={handleFLooble} onMouseLeave={handleEvent2} style={{transitionDelay: '0.2s'}}>
              <div className="image-divs" id="cont5-img3">
                <span className={flooble}>
                  <span className={description1}>
                    
                    <p>A fully functional search engine. <br />Built with React js and firebase.</p>
                  </span>
                  <a className={description2} href="https://fooble-search.web.app/"><Button id='descriptionButton'>Visit website</Button></a>
                </span>
                <img src={fooble} alt="Fooble search" />
              </div>
              
            </div>
          </Scene>

          <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs4" onMouseOver={handleChirper} onMouseLeave={handleEvent2}>
              <div className="image-divs" id="cont5-img4">
                <span className={chirper}>
                  <span className={description1}>
                    
                    <p>A functional twitter clone that you can post anything you want. <br />Built with react js and firebase</p>
                  </span>
                  <a className={description2} href="https://twitter-replica-766.web.app/"><Button id='descriptionButton'>Visit website</Button></a>
                </span>
                <img src={twitter} alt="colosseum gym" />
              </div>
              
            </div>
          </Scene>

          <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs4" onMouseOver={handleGym} onMouseLeave={handleEvent2} style={{transitionDelay: '0.2s'}}>
              <div className="image-divs" id="cont5-img4">
                <span className={gymClub}>
                  <span className={description1}>
                    
                    <p>A website for a gym located in Kenya.<br />Built with Wordpress and Elementor</p>
                  </span>
                  <a className={description2} href="http://wine-country.great-site.net/"><Button id='descriptionButton'>Visit website</Button></a>
                </span>
                <img src={trainer} alt="colosseum gym" />
              </div>
              
            </div>
          </Scene>

          <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs4" onMouseOver={handleWeather} onMouseLeave={handleEvent2}>
              <div className="image-divs" id="cont5-img4">
                <span className={weatherApp}>
                  <span className={description1}>
                    
                    <p>This is a functional weather app that shows the current weather of any location.</p>
                  </span> 
                  <a className={description2} href="https://weather-app-react-c1f8d.web.app/"><Button id='descriptionButton'>Visit website</Button></a>
                </span>
                <img src={weather} alt="colosseum gym" />
              </div>
              
            </div>
          </Scene>

          <Scene classToggle='fade-in' reverse={false}>
            <div className="cont5-divs" id="cont5-divs5" onMouseOver={handleSunnyside} onMouseLeave={handleEvent2} style={{ backgroundColor: 'hsl(212, 27%, 19%)', transitionDelay: '0.2s' }} >
              <div className="image-divs" id="cont5-img5">
                <span className={sunnysideDiv}>
                  <span className={description1}>
                      
                    <p>The official website for Sunnyside</p>
                  </span>
                  <a className={description2} href="http://sunnyside.great-site.net/"><Button id='descriptionButton'>Visit website</Button> </a>
                </span>
                <img id='sunnyside' src={sunnyside} className='port-img' alt="Jane's therapy"   />
              </div>
              
              
            </div>
          </Scene>

          
        </div>
      </Controller>
    </div>
  );
};

export default Portfolio;

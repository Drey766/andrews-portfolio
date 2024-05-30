import React from 'react'
import './Footer.css'
import gmail from './images/gmail.png'
import telegram from "./images/telegram-app.png"
import upwork from "./images/upwork.jpg"
import instagram from "./images/instagram.png"
import twitter from "./images/twitter--v1.png"
import logo2 from '../logo.svg'

function Foooter() {
  return (
    <div className='footer'>
        <div className="cont-footer">
            <div className="logo-div"><img src={logo2} alt="logo" className="logo" /></div>
            <div className="quote-div">Feel free to contact me on any of <br /> the platforms below:</div>
            <div className="contact-plats">
                <a href="mailto:andrewkimani766@gmail.com" id="gmail" className="contac-links"><img src={gmail} alt="gmail" className="contact-img" id="gmail" /></a>
                <a href="t.me/drew766" className="contac-links"><img src={telegram} alt="telegram" className="contact-img" id="telegram" /></a>
                <a href="https://www.upwork.com/freelancers/~01f1f91349e53f4076" className="contact-links"><img src={upwork} alt="upwork" className="contact-img" id="upwork" /></a>
                <a href="instagram.com/andrey_kimani" className="contac-links"><img src={instagram} alt="instagram" className="contact-img" id="instagram" /></a>
                <a href="https://twitter.com/Lord_andrey766?t=kQwnNm8beZu9ZVhPMT6o2\w&s=09" className="contact-links"><img src={twitter} alt="twitter" id="twitter" className="contact-img" /></a>
            </div>
        </div>
    </div>
  )
}

export default Foooter
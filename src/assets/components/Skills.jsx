import React from 'react'
import './Skills.css'
import { Controller, Scene } from '@farmako/react-scrollmagic'
import html from './icons/html-5 (1).png'
import css from './icons/css-3.png'
import javascript from './icons/js.png'
import jquery from './icons/jquery.png'
import reactImg from './icons/atom.png'
import redux from './icons/icons8-redux-96.png'
import vue from './icons/icons8-vue-js-96.png'
import wordpress from './icons/wordpress.png'
import python from './icons/python.png'
import git from './icons/icons8-git-96.png'
import github from './icons/icons8-github-squared-100.svg'
import webpack from './icons/icons8-webpack-96.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


function Skills() {
    const responsive = {
        desktop : {
            breakpoint: {max: 3000, min: 1024},
            items: 5
        },

        tablet : {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },

        mobile : {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    }

    const handleClick = () => {
        window.scrollTo({ top: 3800, behavior: 'smooth' });
      };
    

  return (
    <div className='my-skills'>
        <Controller>
            <div className="container">
                <div className="skills">
                    <Scene classToggle='fade-in' reverse={false}><h2 className="skills-divs">My skills</h2></Scene>
                    <Scene classToggle='fade-in' reverse={false}><p className="skills-divs">I am skilled in HTML/HTML5, CSS/CSS3, Javascript, JQuery, Bootsrap, WordPress, React, Redux, Firebase, Python, Webpack, Github and Atom.</p></Scene>
                    <Scene classToggle='fade-in' reverse={false}><p className="skills-divs">I am a Digital Craftsman who creates clean, readable and mantainable code as well as beautiful and usable web designs.</p></Scene>
                    <Scene classToggle='fade-in' reverse={false}><button type="button" className="skills-divs" id="my-button" name="button" onClick={handleClick}>Contact Me</button></Scene>
                </div>
                
                <Scene classToggle='fade-in' reverse={false}>
                    <div className="progress">
                        <div className="skills__cont">
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="html">
                                    HTML
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="css">
                                    CSS
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="javascript">
                                    javascript
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="jquery">
                                    jquery
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="react">
                                    react
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="redux">
                                    redux
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="vue">
                                    vue js
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="wordpress">
                                    wordpress
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="python">
                                    python
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="git">
                                    git
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="github">
                                    github
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="webpack">
                                    webpack
                                </div>
                            </Scene>
                            <Scene classToggle='fade-in' reverse={false}>
                                <div className="languages" id="webpack">
                                    material UI
                                </div>
                            </Scene>
                        </div>
                    </div>
                </Scene>
            </div>
        </Controller>
    </div>
  )
}

export default Skills
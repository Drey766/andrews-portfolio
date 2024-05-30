import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, easeIn, easeInOut, easeOut } from 'framer-motion';
import './FirstDiv.css';
import ParticleCanvas from './Canvas2';

function FirstDiv3() {
  const transition = { duration: 1, ease: 'easeInOut', delay: 0.8 };
  const text1 = 'I curate experiences';
  const text2 = 'with technology.';
  const scrollToAbout = () => {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    window.scrollTo({ top: 2500, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    window.scrollTo({ top: 3600, behavior: 'smooth' });
  };

  
  

  return (
    <>
      <motion.div exit={{ height: '100vh', transition }} className="transition2" />
      <section className="landing__top">
        <AnimatePresence>
          <motion.div className="background-video" id="background-video" initial ={{opacity: 0}} animate={{opacity:1}} transition={{delay: window.innerWidth < 400 ? 4 : 7, duration: 0.4, ease: easeOut}}>
            <ParticleCanvas className="background" />
          </motion.div>
        </AnimatePresence>
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .5, duration: window.innerWidth < 400 ? 0.9: 1, ease: easeInOut }}
              className="sub">Front-End Developer</motion.div>
          </AnimatePresence>
          <h1 className="landing__main">
            <span className="text-con">
              <AnimatePresence>
                {text1.split("").map((t, i) => (
                  <motion.span key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i  * 0.1 +2, duration: 2 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text">
                    {t}
                  </motion.span>
                ))}
                <br />
                {text2.split("").map((t, i) => (
                  <motion.span key={`text2${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (text1.length + i ) * 0.1 +2, duration: 2, ease: easeInOut }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text">
                    {t}
                  </motion.span>
                ))}
              </AnimatePresence>
            </span>
          </h1>
          <AnimatePresence>
            <motion.h1 className="landing__main2" initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.9, ease: easeInOut }}
                  exit={{ opacity: 0, y: 100 }}>
                  
              I curate experiences <br /> with technology.
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence>
            <div className="links">
              <motion.span initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: window.innerWidth < 400 ? 2.6 : 6, duration: 0.7, ease: easeIn }}
              exit={{ opacity: 0, y: 50 }} className="item" onClick={scrollToAbout} >
                About Me
              </motion.span>

              <motion.span className="item" id='dash' initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: window.innerWidth < 400 ? 2.8 : 6.3, duration: 0.7, ease: easeIn }}
                  exit={{ opacity: 0, y: 0 }}>—</motion.span>

              <motion.span className="item" initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: window.innerWidth < 400 ? 3 : 6.6, duration: 0.7, ease: easeIn }}
                exit={{ opacity: 0, y: 0 }}
                onClick={scrollToPortfolio}
                >My Projects</motion.span>
            </div>
          </AnimatePresence>

        </section>
    </>
  );
}

export default FirstDiv3;

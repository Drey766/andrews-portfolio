import React, { useEffect, useRef, useState } from "react";
import './App.css';
import FirstDiv3 from './assets/components/FirstDiv';
import SecondDiv from './assets/components/SecondDiv';
import Skills from './assets/components/Skills';
import Wave from './assets/components/Wave';
import Foooter from './assets/components/Footer';
import Copyright from './assets/components/Copyright';
import Portfolio from './assets/components/Portfolio';
import Contact from './assets/components/Contact';
import gsap from "gsap";
import { AnimatePresence } from "framer-motion";
import Loader from "./assets/components/Loader";
import Header from "./assets/components/Header";
import Navigation from "./assets/components/Navigation";

function App() {
  let cursorRef = useRef();
  let cursorRef2 = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // set viewport width, for mobile devices.
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // To stop the app from flashing, we hide the entire body in the css and then show it when the JavaScript loads.
    gsap.to("body", 0, { css: { visibility: "visible" } });

    // custom cursor
    const cursorList = document.addEventListener("mousemove", (e) => {
      if (cursorRef.current && cursorRef2.current) {
        cursorRef.current.setAttribute(
          "style",
          `transform: translate3d(${e.pageX - 10}px, ${e.pageY - 10}px, 0px)`
        );
        cursorRef2.current.setAttribute(
          "style",
          `transform: translate3d(${e.pageX + 10}px, ${e.pageY + 10}px, 0px)`
        );
      }
    });

    return () => {
      document.removeEventListener("mousemove", cursorList);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <main className="App">
          <div ref={cursorRef} className="cursor"></div>
          <div ref={cursorRef2} className="cursor cursor2"></div>
          <AnimatePresence initial={false} mode="wait">
            <Header key='header' />
            <Navigation key='headerNav' />
            <FirstDiv3 key='div' />
            <SecondDiv key='div1' />
            <Skills key='div2' />
            <Portfolio key='div3' />
            <Contact key='div4' />
            <Wave key='div5'/>
            <Foooter key='div6'/>
            <Copyright key='div7' />
          </AnimatePresence>
        </main>
      )}
    </>
  );
}

export default App;
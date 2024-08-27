import React, { useState, useEffect } from "react";
import { openMenu, closeMenu } from "./animations";
import './Header.css'
import logo from '../logo.svg'


const Header = ({ history }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }

    
  }, [menuOpen, history]);

  const menuToggle = () => {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 1500);
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header">
      <div className={`logo header-item`}>
        
        {/* changed */}
        <img src={logo} alt="logo" id="logo2" />

      </div>
      <div
        onClick={menuToggle}
        className={`hamburger${menuOpen ? "__active" : ""} ${
          disabled ? "ham-disabled" : ""
        } header-item`}
        style={{height: '60px', width: '60px'}}
      >
        <div className="hamburger-icon" style={{height: '100%', width: '100%'}}></div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="hamburger-menu">
      <div className="nav-primary">
        <div className="nav-content">
          <div className="nav-title">Menu</div>
          <div className="nav-links">
            <div data-text="Home" className="nav-link">
              <a className="active-link" href="/">
                Home
              </a>
            </div>
            <div data-text="About Me" className="nav-link">
              <a className="active-link" href="/">
                About me
              </a>
            </div>
            <div data-text="Contact" className="nav-link">
              <a className="active-link" href="/">
                Contact
              </a>
            </div>

            <div data-text="GitHub" className="nav-link">
              <a
                href="https://github.com/Drew766"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>

            <div data-text="Linkedin" className="nav-link">
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>

            {/* <div data-text="Blog" className="nav-link">
              <a
                href="https://dev.to/oluwadareseyi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div> */}
          </div>
        </div>
        <div className="hover-bg"></div>
      </div>
      <div className="nav-secondary"></div>
    </div>
  );
};

export default Navigation;

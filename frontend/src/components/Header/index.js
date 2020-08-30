import React, { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserCircle,
  faEnvelope,
  faFolder,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [menu, toggleMenu] = useState(false);
  const [opened, toggleOpened] = useState(false);
  const expand = () => {
    if(!menu) toggleOpened(true);
    else {
      setTimeout(() => {
        toggleOpened(false);
      }, 300); 
    }
    toggleMenu(!menu);  
  }
  return (
    <header className="Header Header-container">
      <div className="Header-logo">
        <p>christian terence</p>
      </div>
      <div className="Header-options Header-options--mobile">
        <div className="Header-expand">
          <div className="Header-icon" onClick={expand}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <div
        className={`Header-popup Header-popup${
          menu ? "--active" : "--inactive"
        }${
          opened ? " Header-popup--opened" : ""
        }`}
      >
        <div className="Header-options Header-options--popup">
          <div className="Header-option Header-option--popup">
            <div className="Header-label">Home</div>
            <div className="Header-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
          </div>
          <div className="Header-option Header-option--popup">
            <div className="Header-label">About</div>
            <div className="Header-icon">
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
          </div>
          <div className="Header-option Header-option--popup">
            <div className="Header-label">Contact</div>
            <div className="Header-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          <div className="Header-option Header-option--popup">
            <div className="Header-label">Projects</div>
            <div className="Header-icon">
              <FontAwesomeIcon icon={faFolder} />
            </div>
          </div>
        </div>
      </div>
      <div className="Header-options Header-options--desktop">
        <div className="Header-option">
          <div className="Header-icon">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="Header-label">Home</div>
        </div>
        <div className="Header-option">
          <div className="Header-icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <div className="Header-label">About</div>
        </div>
        <div className="Header-option">
          <div className="Header-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="Header-label">Contact</div>
        </div>
        <div className="Header-option">
          <div className="Header-icon">
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <div className="Header-label">Projects</div>
        </div>
      </div>
    </header>
  );
}
export default Header;

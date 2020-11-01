import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="Footer Footer-container">
      <div className="Footer-logo">
        <FontAwesomeIcon icon={faCircle}/> 
        <p>beep bop 👨‍💻</p>
      </div>
      <div className="Footer-socials">
        <div
          className="Footer-social"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/christianterence/",
              "_blank"
            )
          }
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div
          className="Footer-social"
          onClick={() =>
            window.open("https://github.com/christerence", "_blank")
          }
        >
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
    </div>
  );
}
export default Footer;

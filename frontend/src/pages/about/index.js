import React, {useState} from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
function About() {
  const [show, setShow] = useState(false);
  return (
    <div className="About">
      <div className="About-container">
        <div className="About-info">
          <FontAwesomeIcon className="About-infoIcon" icon={faInfoCircle} onClick={() => setShow(!show)}/>
          <div className="About-infoText" style={show ? {display: 'block'} : {}}>
            image was drawn by <a href="https://joylee.herokuapp.com/">joyce lee</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

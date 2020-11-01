import React from "react";
import "./Teaser.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
function Teaser({ img, preview, url = "/", external = 'false'}) {
  return (
    <div className="Teaser Teaser-container">
      <div className="Teaser-imageWrapper">
        <img className="Teaser-image" src={img} alt="preview" />
      </div>
      {preview && preview !== '' && (
        <div className="Teaser-preview">{preview}</div>
      )}
      <div className="Teaser-navigation">
        {external ? (
          <a href={url} className="Teaser-navigationText">
            Learn More
            <FontAwesomeIcon
              className="Teaser-navigationIcon"
              icon={faChevronCircleRight}
            />
          </a>
        ) : (
          <Link to={url} className="Teaser-navigationText">
            Learn More
            <FontAwesomeIcon
              className="Teaser-navigationIcon"
              icon={faChevronCircleRight}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
export default Teaser;

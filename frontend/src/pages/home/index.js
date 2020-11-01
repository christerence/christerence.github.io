import React from "react";
import "./Home.scss";
import { Teaser } from '../../components';
function Home() {
  return (
    <div className="Home Home-container">
      <div className="Home-bannerWrapper">
        <p className="Home-bannerText">
          Welcome
        </p>
      </div>
      <div className="Home-teasers">
        <Teaser img={require("../../assets/logo.png")} preview="about me" url="/about" />
        <Teaser img={require("../../assets/resume.png")} url="https://drive.google.com/file/d/1ZpRCOBJ3YaDPDgwDGH5MAfuy_MLIQYXX/view?usp=sharing" external preview="resume"/>
        <Teaser img={require("../../assets/github.png")} url="https://github.com/christerence/" external preview="github"/>
        <Teaser img={require("../../assets/linkedin.png")} url="https://www.linkedin.com/in/christianterence/" external preview="linkedin"/>
        <Teaser img={require("../../assets/songorganizer.png")} url="http://songorganizer.herokuapp.com/" external/>
      </div>
    </div>
  );
}
export default Home;

import React from "react";
import "./Home.scss";
import { Teaser } from '../../components';
function Home() {
  return (
    <div className="Home Home-container">
      <div className="Home-tag">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
      </div>
      <div className="Home-bannerWrapper">
        <p className="Home-bannerText">
          Welcome
        </p>
      </div>
      <div className="Home-teasers">
        <Teaser img={require("../../assets/logo.png")} preview="about me" url="/about" />
        <Teaser img={require("../../assets/songorganizer.png")} url="http://songorganizer.herokuapp.com/" external/>
        <Teaser img={require("../../assets/logo.png")}/>
        <Teaser img={require("../../assets/logo.png")}/>
      </div>
    </div>
  );
}
export default Home;

import React from "react";
import "./Hero.css";
import bgVideo from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="left-section">
        <div className="upper-content">
          <div className="left-title"></div>
          <div className="left-heading"></div>
        </div>
        <div className="lower-content">
          <div className="lower-text"></div>
          <div className="social-links">
            <div className="telegram">
              <img src="" alt="" />
            </div>
            <div className="twitter">
              <img src="" alt="" />
            </div>
            <div className="discord">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

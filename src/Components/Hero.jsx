import React from "react";
import "./Hero.css";
import bgVideo from "../assets/video.mp4";
import telegram from "../assets/Vector (17).png";
import twitter from "../assets/Vector (18).png";
import discord from "../assets/Vector (19).png";
import realicon from "../assets/Icon.png";
import stack from "../assets/Icon (1).png";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="left-section">
        <div className="upper-content">
          <div className="left-title">Future Conversation Solutions</div>
          <div className="left-heading">Intelligent Service <br />  Automation</div>
        </div>
        <div className="lower-content">
          <div className="lower-text">Automate your customer service with conversational <br />  AI that can answer, understand, and adapt to each <br /> user in real-time — improving efficiency, satisfaction,<br />  and support quality effortlessly.</div>
          <div className="social-links">
            <div className="telegram img">
              <img src={telegram} alt="" />
            </div>
            <div className="twitter img">
              <img src={twitter} alt="" />
            </div>
            <div className="discord img">
              <img src={discord} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
          <div className="text-content">
                  <div className="upper-right">Built with AI for <br /> maximum efficiency</div>
                 <div className="lower-text-right">Smart Responses for <br />Every Scenario</div>
          </div>
          <div className="card-content">
                <div className="realtime-resp-card"><div><img src={realicon} alt="" /></div>Real-Time <br />Response</div>
                 <div className="realtime-resp-card"><div><img src={stack} alt="" /></div>Seamless <br />Integration</div>
          </div>
      </div>
    </div>
  );
};

export default Hero;

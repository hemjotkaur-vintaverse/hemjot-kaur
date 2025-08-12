import React from "react";
import "./ConvoHero.css";
import tick from "../assets/Icon (3).png";
import image from '../assets/Image (5).png'

const ConvoHero = () => {
  return (
    <div className="convo-hero-section">
      <div className="convo-left-content">
        <div className="convo-title">Conversational AI</div>
        <div className="convo-main-heading">Natural <br /> Conversation</div>
        <div className="convo-list-items">
          <ul className="plan-features">
            <li>
              <span>
                <img src={tick} alt="" />
              </span>{" "}
              Understands users' natural language contextually
            </li>
            <li>
              <span>
                <img src={tick} alt="" />
              </span>{" "}
              Responds in real-time with empathy and accuracy
            </li>
            <li>
              <span>
                <img src={tick} alt="" />
              </span>{" "}
              Adapts communication style to user preferences
            </li>
            <li>
              <span>
                <img src={tick} alt="" />
              </span>{" "}
              Supports ongoing dialogue across sessions & platforms
            </li>
          
          </ul>
        </div>
      </div>
      <div className="convo-main-img"><img src={image} alt="" /></div>
    </div>
  );
};

export default ConvoHero;

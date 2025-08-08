import React from "react";
import "./AiDetails.css";
import mainimg from "../assets/Image (1).png";
import aiimg from "../assets/Image (2).png";
import icon from "../assets/Icon (2).png";
import graphimg from "../assets/Image (3).png";
import Response from "../assets/Response in 3 Seconds (1).png";

const AiDetails = () => {
  return (
    <div className="ai-details-section">
      <div className="upper-details-content">
        <div className="left-section-ai">
          <div className="details-content">
            <h2>99%</h2>
            <div className="details-title">
              Language Understanding <br /> Accuracy
            </div>
            <div className="details-text">
              Powered by next-generation <br /> NLP to understand context and{" "}
              <br /> provide relevant answers.
            </div>
          </div>
          <div className="main-img">
            <img src={mainimg} alt="" />
          </div>
        </div>
        <div className="left-section-ai">
          <div className="details-content">
            <h2>24/7</h2>
            <div className="details-title">Quick Response</div>
            <div className="details-text">
              Our chatbot never sleeps. Your <br />
              customers are always there, <br /> whenever they need you.
            </div>
          </div>
          <div className="main-img">
            <img src={mainimg} alt="" />
          </div>
        </div>
      </div>
      <div className="lower-details-content">
        <div className="left-ai-details">
          <div className="ai-img">
            <img src={aiimg} alt="" />
          </div>
          <div className="img-text">
            <div className="ai-title">Quick Integrateion</div>
            <div className="ai-text">
              Connect chatbot to all <br />
              platforms easily.
            </div>
          </div>
        </div>
        <div className="center-ai-card">
          <div className="center-img">
            <img src={Response} alt="" />
          </div>
          <div className="lower-center-text">
            <div className="charge-img">
              <img src={icon} alt="" />
            </div>
            <div className="side-text">
              <div className="battery-text">98%</div>
              <div className="response-text">Response in 3 Seconds</div>
            </div>
          </div>
        </div>
        <div className="left-ai-details">
          <div className="graphimg">
            <img src={graphimg} alt="" />
          </div>
          <div className="img-text">
            <div className="graph-title">+40%</div>
            <div className="graph-text">
                    Business grows through br  intelligent AI chatbots.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDetails;

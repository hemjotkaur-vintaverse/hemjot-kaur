import React from "react";
import "./FunctionList.css";
import chatimg from "../assets/Image (4).png";
import light from "../assets/Light.png";
import multiimg from "../assets/Multi-Platform.png";
import trainimg from "../assets/Easy Training.png";
import reportimg from "../assets/Reporting & Analytics.png";

const FunctionList = () => {
  return (
    <div className="function-list-section">
        {/* <div className="light"><img src={light} alt="" /></div> */}

      <div className="function-main-title">Featured Features</div>
      <div className="function-main-heading">What can be done?</div>
      <div className="function-main-text">
        Automate your customer service with conversational AI that can answer,{" "}
        <br />
        understand, and adapt to each user in real-time.
      </div>
      <div className="function-cards">
        <div className="first-card">
          <div className="left-ai">
            <div className="ai-img">
              <img src={chatimg} alt="" />
            </div>
            <div className="img-text">
              <div className="ai-title">Conversation Personalization</div>
              <div className="ai-text">
                Chatbots customize responses <br />  based on user history.
              </div>
            </div>
          </div>
        </div>
        <div className="first-card">
          <div className="left-ai">
            <div className="ai-img">
              <img src={multiimg} alt="" />
            </div>
            <div className="img-text">
              <div className="ai-title">Multi-Platform</div>
              <div className="ai-text">
                Connect to web, apps, social <br />  media, and messaging services.
              </div>
            </div>
          </div>
        </div>
        <div className="first-card">
          <div className="left-ai">
            <div className="ai-img">
              <img src={trainimg} alt="" />
            </div>
            <div className="img-text">
              <div className="ai-title">Easy Training</div>
              <div className="ai-text">
                Update chatbot responses in just <br /> a few clicks.
              </div>
            </div>
          </div>
        </div>
        <div className="first-card">
          <div className="left-ai">
            <div className="ai-img">
              <img src={reportimg} alt="" />
            </div>
            <div className="img-text">
              <div className="ai-title">Reporting & Analytics</div>
              <div className="ai-text">
                Monitor performance, chat <br /> volume, and conversions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionList;

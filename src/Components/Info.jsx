import React from "react";
import "./Info.css";
import infoimg from "../assets/Video (1).png";

const Info = () => {
  return (
    <div className="info-section">
      <div className="main-text-info">
        <div className="info-title">
          What is <br /> Conversational?
        </div>
        <div className="info-text">
          Conversational AI is an NLP-based technology that enables chatbots to{" "}
          <span>
            understand the intent, emotions, and context of user messages
            naturally.
          </span>{" "}
        </div>
      </div>
      <div className="info-img">
        <img src={infoimg} alt="" />
      </div>
    </div>
  );
};

export default Info;

import React from "react";
import "./Plans.css";
import tick from "../assets/Icon (3).png";
import bgVideo from "../assets/video.mp4";

const Plans = () => {
  return (
    <div className="plans-section">
      <div className="plans-main-title">Pricing</div>
      <div className="plans-main-heading">Start Automation Today</div>
      <div className="plan-cards">
        <div className="first-plan-card">
          <h3 className="plan-title">starter</h3>
          <div className="inner-div">
            <div className="plan-pricing-box">
              <div className="price-text">
                <h1 className="price">$99</h1>
                <div className="per-month">/Month</div>
              </div>
              <button className="plan-btn">Start with Beginner</button>
            </div>
            <div className="starter-list-items">
              <ul className="plan-features">
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  1 Active Bot
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  1,000 Conversations per month
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Web & WhatsApp Integration
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Basic Dashboard & Chat Reports
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Email Support
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pro-plan-card ">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src={bgVideo} type="video/mp4" />
          </video>
          <h3 className="plan-title-pro">Pro</h3>
          <div className="inner-div-pro">
            <div className="plan-pricing-box">
              <div className="price-text">
                <h1 className="price">$149</h1>
                <div className="per-month">/Month</div>
              </div>
              <button className="plan-btn-pro">Choose Pro Plan</button>
            </div>
            <div className="starter-list-items">
              <ul className="plan-features">
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Up to 5 Active Bots
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  10,000 Conversations per month
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                 Multi-Channel (Web, WhatsApp, IG, Telegram)
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Custom Workflows & Automation
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                Real-Time Reports & Zapier Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
         <div className="first-plan-card">
          <h3 className="plan-title">Enterprise</h3>
          <div className="inner-div">
            <div className="plan-pricing-box">
              <div className="price-text">
                <h1 className="price">$199</h1>
                <div className="per-month">/Month</div>
              </div>
              <button className="plan-btn">Contact for Enterprise</button>
            </div>
            <div className="starter-list-items">
              <ul className="plan-features">
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Unlimited Bots & Chats
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Role-Based Access & Team Management
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Integration to CRM & Custom APIs
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Advanced AI Training (LLM/NLP)
                </li>
                <li>
                  <span>
                    <img src={tick} alt="" />
                  </span>{" "}
                  Dedicated Onboarding Team
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="trial-text">Free 7 Day Trial</div>
    </div>
  );
};

export default Plans;

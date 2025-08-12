import React from "react";
import bgVideo from "../assets/video.mp4";
import "./IntHero.css";
import search from "../assets/Vector (21).png";
import ig from "../assets/Frame 85.png";
import intercom from "../assets/Frame 85 (1).png";
import line from "../assets/Frame 85 (2).png";
import messenger from "../assets/Frame 85 (3).png";
import teams from "../assets/Frame 85 (4).png";
import slack from "../assets/Frame 85 (5).png";
import sunshine from "../assets/Frame 85 (6).png";
import telegram from "../assets/Frame 85 (7).png";
import viber from "../assets/Frame 85 (8).png";
import wechat from "../assets/Frame 85 (9).png";
import whatsapp from "../assets/Frame 85 (10).png";
import zendesk from "../assets/Frame 85 (11).png";

const IntHero = () => {
  const integrations = [
    { name: "Instagram", img: ig },
    { name: "Intercom", img: intercom },
    { name: "Line", img: line },
    { name: "Messenger", img: messenger },
    { name: "Microsoft Teams", img: teams },
    { name: "Slack", img: slack },
    { name: "Sunshine Conversations", img: sunshine },
    { name: "Telegram", img: telegram },
    { name: "Viber", img: viber },
    { name: "Wechat", img: wechat },
    { name: "WhatsApp", img: whatsapp },
    { name: "Zendesk", img: zendesk },
  ];

  return (
    <div className="int__hero__section">
      <video autoPlay loop muted playsInline className="bg-video1">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="main__text">
        <div className="int__title">Powered by Intelligence</div>
        <div className="int__main__heading">
          Expand your chatbot <br />
          capabilities
        </div>
        <div className="int__main__text">
          Conversational AI is at the heart of our chatbots—the ability to
          understand human language, respond with the right <br /> context, and
          create conversations that feel natural.
        </div>
      </div>
      <div className="main__container">
        <div className="main__bar">
          <div className="goto__links">
            <button>Integration</button>
            <button>Channel</button>
            <button>LLM</button>
          </div>
          <div className="search__bar">
            <span>
              <img src={search} alt="" />
            </span>
            Search...
          </div>
        </div>
        <div className="cards__container">
          {integrations.map((item, i) => (
            <div className="card" key={i}>
              <div className="card__img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="card__text">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntHero;

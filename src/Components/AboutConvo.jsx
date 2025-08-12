import React from "react";
import "./AboutConvo.css";
import querybox from "../assets/Icon (8).png";

const AboutConvo = () => {
  return (
    <div className="about__convo__section">
      <div className="about__upper__container">
        <button className="faq__btn">FAQ</button>
        <div className="about__text">About Conversational AI</div>
      </div>
      <div className="about__lower__container">
        <div className="query__item">
          <div className="query__text">What is Conversational AI?</div>
          <div className="query_img_box">
            <img src={querybox} alt="" />
          </div>
        </div>
        <div className="query__item1">
          <div className="query__text">
            What is the difference between a regular chatbot and Conversational
            AI?
          </div>
          <div className="query_img_box">
            <img src={querybox} alt="" />
          </div>
        </div>
       <div className="query__item1">
          <div className="query__text">
           Can Conversational AI be used for all types of businesses?
          </div>
          <div className="query_img_box">
            <img src={querybox} alt="" />
          </div>
        </div>
       <div className="query__item1">
          <div className="query__text">
           Can this technology support more than one language?
          </div>
          <div className="query_img_box">
            <img src={querybox} alt="" />
          </div>
        </div>
       <div className="query__item2">
          <div className="query__text">
          How do I integrate Conversational AI into my website?
          </div>
          <div className="query_img_box">
            <img src={querybox} alt="" />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default AboutConvo;

import React from "react";
import "./Footer.css";
import logo from "../assets/Logo (1).png";
import stroke from "../assets/Vector 20 (Stroke).png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-footer-details">
        <div className="first-list-footer">
          <div className="main-logo">
            <span>
              <img src={logo} alt="" />
            </span>
            Neurovia
          </div>
          <div className="lower-main-logo-text">
            We help businesses build intelligent <br /> conversational
            experiences through AI- <br /> based chatbot technology.
          </div>
        </div>
        <div className="products-list-footer">
          <div className="main-product-heading">Products</div>
          <div className="product-list-items">
            <ul>
              <li>Key Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>
        <div className="products-list-footer">
          <div className="main-product-heading">Resources</div>
          <div className="product-list-items">
            <ul>
              <li>Help Center</li>
              <li>Blog & Articles</li>
              <li>Developer Guide</li>
              <li>Case Studies</li>
            </ul>
          </div>
        </div>
        <div className="newsletter-container">
          <div className="main-heading-newsletter">Join Newsletter</div>
          <div className="lower-text-newsletter">
            Get the latest AI updates and product <br /> updates straight to
            your email.
          </div>
          <div className="send-email-container">
            <input type="email" placeholder="Enter your email..." />
            <button className="send-btn">
              <img src={stroke} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="lower-footer-details">
            <div className="project-rights-text">© 2025 Neurovia. All rights reserved.</div>
            <div className="policy-terms-container">
                <div className="terms-text">Terms & Conditions</div>
                <div className="divider"></div>
                <div className="policy-text">Privacy Policy</div>
            </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./DocsHero.css";

const DocsHero = () => {
  return (
    <div className="docs__hero__section">
      <div className="list__docs__items">
        <div className="feature">Quick Start</div>
        <div className="feature">Key Features Guide</div>
        <div className="feature">Integration & API</div>
        <div className="feature">LLM</div>
        <div className="feature">Deployment</div>
        <div className="feature">Management</div>
      </div>
      <div className="docs__container">
        <div className="start__section">
          <div className="main__docs__heading">Quick Start</div>
          <div className="main__docs__text">
            Start your journey to building a chatbot in just a few simple <br />{" "}
            steps. This guide will help you understand the basics of <br />{" "}
            creating a bot and how to publish it effectively.
          </div>
        </div>
        <div className="docs__list__items">
          <div className="first__doc">
            <div className="main__title__doc">
              1. Account Installation & Setup
            </div>
            <div className="main__info__doc">
              First, create your account or login to the dashboard. After that,
              verify your email and complete your profile. You can choose from
              the
              <br />
              available bot templates or start from scratch according to your
              business needs.
            </div>
          </div>
          <div className="first__doc">
            <div className="main__title__doc">2. Create Your First Bot</div>
            <div className="main__info__doc">
              On the dashboard, click “Create New Bot”, give your bot a name and
              a short description. Choose a primary language and define its
              purpose <br /> —whether it’s for customer service, lead
              generation, or something else.
            </div>
          </div>
          <div className="first__doc">
            <div className="main__title__doc">
              3. Build Conversations (Workflows)
            </div>
            <div className="main__info__doc">
              Use the visual flow builder to build your conversations. You can
              add text nodes, questions, branching logic, and arrange the order
              of the <br />
              dialogue. The preview panel will help you test the flow live.
            </div>
          </div>
          <div className="first__doc">
            <div className="main__title__doc">
              4. Connect to a Website or App
            </div>
            <div className="main__info__doc">
              Once done, you can get an embed code to place on your website. For
              users of platforms like WordPress or Shopify, there are
              integration <br />
              plugins available. You can also use the Web SDK or API for custom
              applications.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsHero;

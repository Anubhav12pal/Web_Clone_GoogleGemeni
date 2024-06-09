import React from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="toplayer">
        <p>Gemeni-Clone</p>
        <img src={assets.user_icon}></img>
      </div>

      <div className="lowerLayer">
        <div className="greetings">
          <p className="Hello">Hello Anubhav,</p>
          <p>How can I Help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Explain what the keto diet is in simple terms</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Give me tips for how to grow my youtube channel</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Card1</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Card1</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
        </div>
        <div className="bottomSearch">
          <div className="searchbar">
            <input type="text" placeholder="Enter the prompt" />
            <div className="images">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>

          <p className="Info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

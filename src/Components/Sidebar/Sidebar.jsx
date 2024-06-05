import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [clicked, setclicked] = useState(false);
  return (
    <div className=" sidebar">
      <div className="top">
        <img
          onClick={() => setclicked((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />

        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {clicked ? <p>New Chat</p> : null}
        </div>

        <div className="recent">
          {clicked ? <p className="recent-title">Recent</p> : null}
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            {clicked ? <p>Prompt 1</p> : null}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {clicked ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {clicked ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {clicked ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

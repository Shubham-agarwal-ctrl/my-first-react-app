import React from "react";
import "./style.css";

export default function Skill() {
  return (
    <div className="tech" id="skill">
      <div className="title">Skill</div>
      <div className="description">Technologies i work on</div>
      <div className="skills">
        <div className="skill">
          <img src="/static/html.png" />
          <p className="description">HTML</p>
        </div>
        <div className="skill">
          <img src="/static/css.png" />
          <p className="description">css</p>
        </div>
        <div className="skill">
          <img src="/static/js.png" />
          <p className="description">js</p>
        </div>
        <div className="skill">
          <img src="/static/react.png" />
          <p className="description">React</p>
        </div>
      </div>
    </div>
  );
}

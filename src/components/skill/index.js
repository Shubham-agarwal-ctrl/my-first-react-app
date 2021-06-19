import React from "react";
import "./style.css";

export default function Skill() {
  return (
    <div className="tech" id="skill">
      <div className="title">Skill</div>
      <div className="description">Technologies i work on</div>
      <div className="skills">
        <div className="skill">
          <img src="https://Shubham-agarwal-ctrl.github.io/my-first-react-app/static/html.png" />
          <p className="description">HTML</p>
        </div>
        <div className="skill">
          <img src="https://Shubham-agarwal-ctrl.github.io/my-first-react-app/static/css.png" />
          <p className="description">css</p>
        </div>
        <div className="skill">
          <img src="https://Shubham-agarwal-ctrl.github.io/my-first-react-app/static/js.png" />
          <p className="description">js</p>
        </div>
        <div className="skill">
          <img src="https://Shubham-agarwal-ctrl.github.io/my-first-react-app/static/react.png" />
          <p className="description">React</p>
        </div>
      </div>
    </div>
  );
}

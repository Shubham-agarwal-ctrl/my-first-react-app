import React from "react";
import "./style.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="logo">SHUBHAM</div>
      <div className="links">
        <a className="link" href="#About">
          About
        </a>
        <a className="link" href="#Skill">
          Skill
        </a>
        <a className="link" href="#Contact">
          Contact
        </a>
      </div>
    </div>
  );
}

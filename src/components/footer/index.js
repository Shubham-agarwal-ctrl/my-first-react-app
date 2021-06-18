import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer id="Contact">
      <div className="footer">
        &copy; Copyright 2020
        <script>
          {new Date().getFullYear() > 2017 &&
            document.write("-" + new Date().getFullYear())}
          ;
        </script>
        <div className="contact ">
          Contact me.
          <div className="me">
            <p>Haldwani, INDIA</p>

            <p>+91 8171194103</p>

            <p>shubhamagarwal97600@gmail.com</p>
            <p>it ok broo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <span className="sec1">
      <div className="div1">
        <h1 className="text0">Hi, I am Brooke, a project manager</h1>
        <button className="btn1">Email Me</button>
        <div className="links">
          <a href="https://www.linkdeen.com">linkdeen</a> /
          <a href="https://www.facebook.com"> Facebook</a> /
          <a href="https://www.twitter.com">Twitter</a>
        </div>
      </div>

      <div className="div2">
        <img src="/img/img1.avif" className="img1" />
      </div>
    </span>
  );
};

export default Section1;

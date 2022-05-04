import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="sticky">
      <div className="container">
        <span className="span">
          <p className="logo">BROOKE</p>
          <div className="btn">
            <button className="button">ABOUT ME</button>
            <button className="button">EXPERIENCE</button>
            <button className="button">TESTIMONIALS</button>
            <button className="button">CONTACTS</button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;

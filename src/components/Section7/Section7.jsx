import React from "react";
import "./Section7.css";

const Section7 = () => {
  return (
    <div className="container7">
      <div className="left">
        <h1 className="lets">Let's talk</h1>
        <form className="form">
          <label>Name</label>
          <input type="text" placeholder="Your name"></input>
          <label>Your email* </label>
          <input type="email" placeholder="Your name"></input>
          <label>Message* </label>
          <textarea
            type="text"
            placeholder="Your name"
            rows="5"
            col="10"
          ></textarea>
          <button className="submit">Submit</button>
        </form>
      </div>
      <div className="right">
        <img src="/img/img7.avif" className="img7" />
      </div>
    </div>
  );
};

export default Section7;

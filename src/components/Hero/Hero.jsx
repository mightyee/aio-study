import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container animate-slide-fade">
        <div className="hero-content">
          <h2>Welcome to the AIO Study Platform</h2>
          <h1>All-in-One Platform for <br/> <span>Self-Learners</span></h1>

          <p>Lorem ipsum dolor sit amet consectetur. Pellentesque velit id.<br/>sodales et at fermentum. Sed id egestas nec odio sit.</p>

          <button className="hero-button">
            Read More <span>→</span>
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;

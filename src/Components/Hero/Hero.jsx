import React from "react";
import Lottie from "lottie-react";
import computerAnimation from "../../assets/computer.json";
export default function Hero() {
  return (
    <div className="hero-container">
      <div className="anima-container">
        <Lottie animationData={computerAnimation} />
      </div>
      <div className="hero-text-container">
        <span style={{display: "block"}}>MAKIN DIGITAL</span>
        <span style={{display: "block"}}>MAKIN MAJU</span>
        <span className="text-blue">BERSAMA KOMINFO</span>
      </div>
    </div>
  );
}

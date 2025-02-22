import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function GreetingPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar/>
      <Hero />
    </div>
  );
}


function Hero() {
  return (
    <header className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src="./src/assets/bg.mp4" type="video/mp4" />
       
      </video>
      <div className="hero-content">
        <h1 className="hero-title">
          Open-source IoT 
        </h1>
        <h2 className="hero-title">Device Simulator</h2>
        <p className="hero-subtitle">
          Empower your IoT development with multi-protocol device simulation,
          and visualize <br></br> real-time data streams and seamless integration for
          sensors and actuators.
        </p>
        <div className="hero-button">
          <Link
            to="/getstarted"
            className="btn-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

import React,{useState, useEffect} from "react";
import Navbar2 from "../Navbar/Navbar2.jsx";
import Hero from "../Hero/Hero.jsx";
import Hero2 from '../Hero/Hero2.jsx'; 

// import BgVideo from '../../assets/earth-bg.mp4';
import BgVideo from '../../assets/bailvideo.mp4';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar2 />
        <Hero2 />
      </div>
      
    </div>
  );
};

export default Contact;
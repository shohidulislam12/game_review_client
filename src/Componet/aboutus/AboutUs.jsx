import React, { useContext } from "react";
import { useSpring, animated } from "@react-spring/web";
import { AuthContext } from "../Auth/AuthProvider";

const AboutUs = () => {
    const {them}=useContext(AuthContext)
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const slideIn = useSpring({ transform: "translateY(0px)", from: { transform: "translateY(50px)" }, delay: 400 });

  return (
    <div 
    className={`${them=='dark'?'text-white':'text-gray-600'} ${them=='dark'?'bg-black':'bg-white'} my-10` }
 >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-5 bg-base-300 from-base-100 to-base-300 rounded-lg shadow-lg">
    
        <animated.div style={fadeIn} className="flex-1">
          <img
            src="https://i.ibb.co.com/dmgYRxn/360-F-557617905-i-St6-BAH73qg-XHULb0-Zp-HOw-ADFj7t-X6q8.jpg"
            alt="Gaming Community"
            className="rounded-lg shadow-md"
          />
        </animated.div>

      
        <animated.div style={slideIn} className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left">About Us</h1>
          <p className="text-lg text-justify">
            Welcome to our Game Review Platform, where passion for gaming meets thoughtful critique!
          </p>
          <p className="text-lg text-justify mt-3">
            We are dedicated to providing an engaging space for gamers to explore and share their insights about their
            favorite games. Our mission is to create a community-driven platform where players can discover honest
            reviews, detailed ratings, and exciting discussions about games from every genre—whether it's RPGs, action,
            simulation, or adventure.
          </p>
          <p className="text-lg text-justify mt-3">
            Join us in shaping the future of gaming reviews—your voice matters here. Let's discover, discuss, and
            celebrate the incredible world of video games together!
          </p>
          <p className="text-lg mt-4 font-semibold text-center md:text-left">Happy Gaming! 🎮</p>
        </animated.div>
      </div>
    </div>
  );
};

export default AboutUs;

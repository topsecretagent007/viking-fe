import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/header_logo2.png"; // Assuming this is the correct path

const Card = ({ className, imgSrc, title, description }) => {
  return (
    <div
      className={`rounded-lg shadow-lg p-6 flex items-start w-full max-w-lg ${className}`}
    >
      <img
        src={imgSrc}
        alt="odin"
        className="relative z-0 w-11 h-11 mr-4 mt-0 rounded-full"
      />
      <div>
        <h2 className="text-l font-sm text-orange-400">{title}</h2>
        <p className="text-white-100 text-[13px] mt-2">{description}</p>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="relative flex flex-col items-center lg:mt-20">
      {/* <div className="w-full h-[300px]">
        <img src="../src/assets/bg.gif" alt="logo" className="opacity-30 relative w-full  flex flex-col" />
      </div> */}
      <h1 data-aos="zoom-in" className="relative top-1/2 mt-0 transform -translate-y-1/2 text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white">
        <span className="bg-gradient-to-r from-orange-100 to-orange-100 text-transparent bg-clip-text">
          VIKING MULTI DEX
        </span>
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text text-bg">
          ON BITCOIN
        </span>
      </h1>
      <h2 data-aos="zoom-in-down" className="items-center text-[16px] md:text-lg text-center text-white-100 max-w-[580px] mx-auto px-3">
        Explore a wide range of tokens and enjoy seamless trading on the Viking platform, offering access to all tokens available on Bitcoin DEXs.
      </h2>

      <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center my-10">
        <Link to="swap">
          <a href="#" className="neon-button py-3 px-6 rounded-[40px]">
            Launch App
          </a>
        </Link>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="flex flex-wrap justify-center mt-10 gap-8 w-full px-4">
        <Card
          className="rounded-lg w-full border-2 border-opacity-10 border-orange-200 mx-2 my-4"
          imgSrc={hero}
          title="VIKING DEX: CONQUER THE BITCOIN MARKET"
          description="Trade confidently and conquer the Bitcoin markets with VIKING DEX's robust and user-friendly platform."
        />
        <Card
          className="rounded-lg w-full border-2 border-opacity-10 border-orange-200 mx-2 my-4"
          imgSrc={hero}
          title="VIKING DEX: STRONGER WITH EVERY WAVE"
          description="Experience a DEX that evolves with each wave of innovation, providing you with the latest tools and features for successful trading."
        />
        <Card
          className="rounded-lg w-full border-2 border-opacity-10 border-orange-200 mx-2 my-4"
          imgSrc={hero}
          title="THE AGE OF VIKING BEGINS: ELEVATE YOUR DEX"
          description="Step into the new era of decentralized exchanges with VIKING DEX, where you can elevate your trading experience to new heights."
        />
        <Card
          data-aos="flip-left"
          className="rounded-lg w-full border-2 border-opacity-10 border-orange-200 mx-2 my-4"
          imgSrc={hero}
          title="YOUR TRADES POWER YOUR EARNINGS: VIKING DEX WITH VIKI REWARDS"
          description="Earn rewards while you trade on VIKING DEX, where your trades directly contribute to your earnings through the VIKI Rewards program."
        />
      </div>
    </div>
  );
};

export default Index;

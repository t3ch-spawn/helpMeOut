import React from "react";
import grid from "../assets/images/grid-img.png";
import arrow from "../assets/images/arrow-right.svg"

export default function Hero() {
  return (
    <div className="bg-white mt-[-3.5rem] flex justify-around py-[100px] items-center px-7 -1000:flex-col-reverse" id="hero">
      {/* container for typography and button */}
      <div className="flex flex-col gap-8 max-w-[500px] -1000:items-center -1000:text-center">
        {/* heading */}
        <h1 className="text-[#141414] text-6xl font-sora font-[700] -700:text-4xl">Show Them Don’t Just Tell</h1>

        {/* paragraph */}
        <p className="text-heroPara">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>

        {/* button */}

        <a className="bg-mainBlue font-workSans flex items-center justify-center gap-4 text-white w-fit p-3 rounded-md" href="">
          <p className="text-sm">Install HelpMeOut</p>
          <img src={arrow} alt="" />
        </a>
      </div>

      {/* container for grid system */}
      <div>
        <img className="max-w-[500px] w-full" src={grid} alt="" />
      </div>
    </div>
  );
}

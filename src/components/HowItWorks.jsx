import React from "react";
import num1 from "../assets/images/num-1.svg";
import num2 from "../assets/images/num-2.svg";
import num3 from "../assets/images/num-3.svg";
import screen from "../assets/images/record-screen.png";

export default function HowItWorks() {
  const arr = [
    {
      id: 1,
      title: "Record Screen",
      para: 'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
      number: num1,
      img: screen,
    },
    {
      id: 2,
      title: "Share Your Recording",
      para: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
      number: num2,
      img: screen,
    },
    {
      id: 3,
      title: "Learn Effortlessly",
      para: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
      number: num3,
      img: screen,
    },
  ];

  return (
    <div className="bg-white py-[100px] pb-[150px] mb-[-4rem]  flex flex-col items-center" id="how-it-works">
      {/* heading */}
      <h2 className="sub-heading mb-16">How it works</h2>

      {/* container for boxes */}
      <div className="flex justify-around px-7 w-[100%] flex-wrap gap-14">
        {arr.map((box) => {
          return (
            <Helper
                key = {box.id}
              number={box.number}
              para={box.para}
              title={box.title}
              img={box.img}
            />
          );
        })}
      </div>
    </div>
  );
}

function Helper(props) {
  return (
    <div className="flex flex-col items-center gap-6 max-w-[300px]">
      {/* number icon */}
      <img src={props.number} alt="" />

      {/* title */}
      <h3 className="text-DarkblueTxt text-2xl font-bold font-inter">{props.title}</h3>

      {/* paragraph */}
      <p className="text-center text-greyTxt font-workSans">{props.para}</p>

      {/* screen recording image */}
      <img className="w-full" src={props.img} alt="" />
    </div>
  );
}

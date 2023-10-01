import React from "react";
import videoRepo from "../assets/images/video-repo.png"
import share from "../assets/images/easy-share.svg"
import record from "../assets/images/record-icon.svg"
import revisit from "../assets/images/revisit.svg"

export default function Features() {
  const featureArr = [
    {
      id: 1,
      title: "Simple Screen Recording",
      para: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
      img: record,
    },
    {
      id: 2,
      title: "Easy-to-Share URL",
      para: "Share your recordings instantly with a single link. No attachments, no downloads.",
      img: share,
    },
    {
      id: 3,
      title: "Revisit Recordings",
      para: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
      img: revisit,
    },
  ];

  return (
    <div className="font-workSans text-greyTxt bg-white flex flex-col items-center gap-14 py-[100px]" id="features">
      {/* container for headings */}
      <div className="text-center">
        <h2 className="sub-heading mb-4">Features</h2>
        <p>Key Highlights of Our Extension</p>
      </div>

      {/* container for main content */}
      <div className="flex justify-around items-center px-7 w-[100%] -1000:flex-col-reverse -1000:gap-16">
        {/* container for typography */}
        <div className="flex flex-col gap-6 max-w-[480px] -1000:text-center -1000:gap-8">
          {featureArr.map((feature) => {
            return (
              <FeatureHelper
                title={feature.title}
                para={feature.para}
                image={feature.img}
                key = {feature.id}
              />
            );
          })}
        </div>

        {/* container for image */}
        <div>
          <img className="max-w-[500px] w-full" src={videoRepo} alt="" />
        </div>
      </div>
    </div>
  );
}

function FeatureHelper(props) {
  return (
    <div className="flex items-start gap-4 -1000:flex-col -1000:items-center">
      {/* icon */}
      <img src={props.image} alt="" />

      {/*container for typography */}
      <div>
        <h3 className="text-DarkblueTxt text-2xl font-bold font-inter mb-2">{props.title}</h3>
        <p>{props.para}</p>
      </div>
    </div>
  );
}

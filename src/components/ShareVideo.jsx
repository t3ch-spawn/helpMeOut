import React from "react";
import copyBtn from "../assets/images/copy.svg";
import facebook from "../assets/images/facebook.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import telegram from "../assets/images/telegram.svg";

export default function ShareVideo() {
  const mediaArr = [
    { id: 1, name: "Facebook", icon: facebook },
    { id: 2, name: "WhatsApp", icon: whatsapp },
    { id: 3, name: "Telegram", icon: telegram },
  ];

  return (
    // container for entire section
    <div className="flex flex-col w-[80%] m-auto">
      {/* TOP CONTAINER FOR SHARE FORM AND VIDEO PREVIEW */}
      <div className="flex gap-4">
        {/* CONTAINER FOR SHARE FORM */}
        <div className="flex flex-col w-[50%] gap-[60px]">
          <h2 className="font-sora text-[#141414] text-4xl font-bold">
            Your video is ready
          </h2>

          {/* container for email address of receiver */}
          <div className="flex flex-col gap-[100px]">
            <div className="flex flex-col gap-4">
              <p className="text-[#727272]">Name</p>
              <p className="text-[#413C6D] font-semibold text-2xl font-sora">
                Untitled_Video_20232509
              </p>
            </div>

            {/* container for input and send button */}
            <div className="relative">
              <input
                className="bg-[#b6b3c633] w-full p-5 rounded-lg text-sm font-workSans"
                type="email"
                placeholder="enter email of receiver"
                required
              />
              <div className="bg-[#605C84] p-3 px-4 cursor-pointer w-fit absolute right-4 top-[50%] translate-y-[-50%]  rounded-md text-white placeholder:text-[#434343cc]">
                Send
              </div>
            </div>
          </div>

          {/* container for video url */}
          <div className="flex flex-col font-semibold text-xl gap-4">
            <p>Video Url</p>

            {/* container that houses url link and copy btn */}
            <div className="w-full border-[#929292] border-[0.5px] flex justify-between items-center rounded-lg p-2 text-base">
              <p className="text-[#4B4B4B] font-workSans">
                https://www.helpmeout/Untitled_Video_20232509
              </p>
              <button className="flex items-center gap-2 border-[#120B48] text-[#120B48] border-[1px] rounded-md p-3 px-4">
                <img src={copyBtn} alt="" />
                <p>Copy</p>
              </button>
            </div>
          </div>

          {/* container for social media share buttons */}
          <div className="flex items-center justify-around w-full ">
          
            {mediaArr.map((media) => {
              return (
                <div className="flex gap-2 items-center justify-center border-[#0A0628] border-[1px] font-[500] text-[#08051E]">
                  <img src={media.icon} alt="" />
                  <p>{media.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ///////////////////////////// */}
        {/* ///////////////////////////// */}
        {/*CONTAINER FOR VIDEO PREVIEW */}
        <div></div>
      </div>

      {/* ///////////////////////////// */}
      {/* ///////////////////////////// */}
      {/* ///////////////////////////// */}
      {/* BOTTOM CONTAINER FOR CREATE AN ACCOUNT */}
      <div></div>
    </div>
  );
}

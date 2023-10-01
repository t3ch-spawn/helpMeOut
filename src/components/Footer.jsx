import React from "react";
import logo from "../assets/images/footer-logo.svg";

export default function Footer() {
  const footerArr = [
    { id: 1, title: "Menu", links: ["Home", "Converter", "How it Works"] },
    {
      id: 2,
      title: "About us",
      links: ["About", "Contact Us", "Privacy Policy"],
    },
    {
      id: 3,
      title: "Screen Record",
      links: ["Browser Window", "Desktop", "Application"],
    },
  ];

  return (
    <footer className="bg-mainBlue flex justify-around py-[100px] -700:flex-col -700:items-center -700:gap-[80px]">
      {/* icon container */}
      <div>
        <a href="#hero">
          <img src={logo} alt="" />
        </a>
      </div>

      {/* The rest of the footer links */}
      {footerArr.map((item) => {
        return (
          <ul key={item.id} className="text-white flex flex-col gap-6 -700:items-center">
            <li className="font-bold font-sora cursor-pointer">{item.title}</li>
            {item.links.map((link, idx) => {
              return (
                <li key={idx} className="cursor-pointer font-workSans font-[300]">
                  {link}
                </li>
              );
            })}
          </ul>
        );
      })}
    </footer>
  );
}

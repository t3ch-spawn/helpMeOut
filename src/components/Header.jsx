import React from "react";
import logo from "../assets/images/logo.svg";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isShown, setIsShown] = useState(false);
  const [hamShown, setHamShown] = useState(false);
  const ham = useRef(null);
  const [not, setNot] = useState("");

  useEffect(() => {
    if (window.innerWidth < 700) {
      setHamShown(true);
    } else {
      setHamShown(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 700) {
      setHamShown(true);
    } else {
      setHamShown(false);
    }
  });

  function handleMenu() {
    console.log(hamShown);
    if (hamShown) {
      setIsShown(!isShown);
    }

    if (ham.current.classList.contains("active")) {
      setNot("not");
    } else {
      setNot("");
    }
  }

  return (
    <header className="flex justify-between items-center bg-white sticky top-0 left-0 w-full px-16 py-4">
      {/* container for icon */}
      <div>
        <a href="#hero">
          <img src={logo} alt="" />
        </a>
      </div>

      {/* overlay */}
      {isShown ? (
        <div
          className="fixed bg-overlay top-0 left-0 h-[100%] w-[100%] z-[10]"
          onClick={handleMenu}
        ></div>
      ) : (
        ""
      )}

      {/* container for hamburger */}
      <div
        ref={ham}
        onClick={handleMenu}
        className={`hamburger hidden ${isShown ? "active" : ""} ${not}`}
      >
        <div className="ham-bar ham-bar-1"></div>
        <div className="ham-bar ham-bar-2"></div>
        <div className="ham-bar ham-bar-3"></div>
      </div>

      {/* container for nav */}
      <nav
        className={`navbar ${
          isShown ? "active" : ""
        } flex gap-6 font-semibold items-center justify-center text-[#000] font-workSans`}
      >
        <a onClick={handleMenu} href="#features">
          Features
        </a>
        <a onClick={handleMenu} href="#how-it-works">
          How it works
        </a>

        <Link to={"/signup"}>
          {/* get started button that shows only in the mobile nav*/}
          <div className="text-white font-bold font-sora text-lg -700:block hidden cursor-pointer">
            Get Started
          </div>
        </Link>
      </nav>

      {/* get started button */}
      <Link to={'/signup'}>
        <div className="text-mainBlue font-bold font-sora text-lg -700:hidden cursor-pointer">
          Get Started
        </div>
      </Link>
    </header>
  );
}

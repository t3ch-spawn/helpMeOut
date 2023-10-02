import React from "react";
import logo from "../assets/images/logo.svg";
import google from "../assets/images/google.svg";
import facebook from "../assets/images/facebook.svg";

export default function SignUp() {

    function handleForm (e){
            e.preventDefault()
    }

  return (
    <div className="flex flex-col min-h-[100vh] justify-center gap-[70px] overflow-hidden">
      {/* container for image containing icon */}
      <div className="relative left-[100px]">
        <img src={logo} alt="" />
      </div>

      {/* container for sign up form */}
      <form onClick={handleForm} className="flex flex-col self-center max-w-[400px] w-[90%] gap-[30px]">
        <h1 className="text-center font-inter text-3xl font-[700]">Log in or Sign up</h1>
        <p className="text-[#434343] text-center">
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>
        {/* continue with google */}
        <div className="border-[#141414] border-[1px] flex gap-2 justify-center p-2 rounded-lg cursor-pointer">
          <img src={google} alt="" />
          <p>Continue with Google</p>
        </div>
        {/* continue with facebook */}
        <div className="border-[#141414] border-[1px] flex gap-2 justify-center p-2 rounded-lg cursor-pointer">
          <img src={facebook} alt="" />
          <p>Continue with Facebook</p>
        </div>

        {/* demacating line with "or" in the middle */}
        <div className="flex gap-3 text-[#B9C2C8] justify-center items-center">
            <hr className="border-none h-[1px] bg-[#B9C2C8] w-[50%]"/>
            <p>or</p>
            <hr className="border-none h-[1px] bg-[#B9C2C8] w-[50%]"/>
        </div>

        {/* input group for email */}
        <div className="flex flex-col font-[500] font-workSans gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="border-[#B6B3C6] border-[1px] p-2 rounded-lg px-4 "
          />
        </div>
        {/* input group for password */}
        <div className="flex flex-col font-[500] font-workSans gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            className="border-[#B6B3C6] border-[1px] p-2 rounded-lg px-4 "
          />
        </div>

        {/* sign up button */}
        <button className="text-white text-lg bg-[#120B48] p-3 rounded-lg">
          Sign up
        </button>
      </form>
    </div>
  );
}

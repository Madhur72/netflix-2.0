import React from "react";
import BackgroundImage from "../Components/BackgroundImage";
import Headers from '../Components/Header'
import "../Style.css";
const Signup = () => {
  return (
    <div className=" relative">
      <BackgroundImage />
      <div className=" grid grid-rows-6 left-0 h-screen w-full backdrop-brightness-50">
        <Headers/>
      <div className=" ">
        <div className=" flex flex-col">
          <p className=" text-4xl font-bold">Unlimited Movies, TV shows and more</p>
          <p className=" text-lg">Watch anywhere. Cancel anytime.</p>
          <p className=" text-sm">
            Ready to watch? Enter your email to create or restart membership
          </p>
        </div>

        <div className="form">
          <input type="email" placeholder="Email Adress" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Get Started</button>
        </div>
        <button>
          Log In
        </button>
      </div>
      </div>
    </div>
  );
};

export default Signup;

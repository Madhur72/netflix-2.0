import React, { useState } from "react";
import BackgroundImage from "../Components/BackgroundImage";
import Headers from "../Components/Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../Utils/firebase.config";
import "../Style.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignIn = async () => {
    const { email, password } = formValues;
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div className=" relative">
      <BackgroundImage />
      <div className=" grid grid-rows-3 left-0 h-screen w-full backdrop-brightness-50">
        <Headers login />
        <div className=" flex flex-col justify-center items-center gap-4">
          <div className=" flex flex-col justify-center items-center gap-5">
            <p className=" text-6xl font-bold  text-white">
              Unlimited Movies, TV shows and more
            </p>
            <p className=" text-2xl text-white">
              Watch anywhere. Cancel anytime.
            </p>
            <p className=" text-2xl text-white">
              Ready to watch? Enter your email to create or restart membership
            </p>
          </div>

          <div className=" flex flex-wrap gap-2 justify-center items-center">
            <input
              value={formValues.email}
              required
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              className=" text-white p-4 bg-transparent border-2 rounded border-gray-500"
              size="40"
              type="email"
              placeholder="Email Adress"
              name="email"
            />
            {showPassword && (
              <input
                value={formValues.password}
                required
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                className=" text-white p-4 bg-transparent rounded border-2 border-gray-600"
                size="40"
                type="password"
                placeholder="Password"
                name="password"
              />
            )}
            {!showPassword && (
              <button
                onClick={() => SetShowPassword(true)}
                className=" text-2xl rounded p-4 font-bold bg-red-600 text-white"
              >
                Get Started{" "}
              </button>
            )}
          </div>
          <button
            onClick={handleSignIn}
            className=" rounded p-2 w-24 font-bold bg-red-600 text-white"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

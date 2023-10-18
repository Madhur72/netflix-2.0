import React, { useState } from "react";
import BackgroundImage from "../Components/BackgroundImage";
import Headers from "../Components/Header";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../Utils/firebase.config";
import "../Style.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogIn = async (event) => {
    event.preventDefault();
    console.log(formValues)
    const { email, password } = formValues;
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error)
    }
  };

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div className=" relative">
      <BackgroundImage />
      <div className=" absolute grid grid-rows-3 left-0 h-screen w-full backdrop-brightness-50 ">
        <Headers signup />
        <div className=" flex items-center justify-center ">
          <form className=" px-6 py-20  flex flex-col items-center justify-center gap-5 bg-dark" onSubmit={handleLogIn}>
          <p className="text-white font-bold text-4xl">Login</p>
          <input
          className=" p-3 rounded border-2 border-gray-600 w-96 bg-transparent"
            type="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, [e.target.name]: e.target.value })
            }
            placeholder="Email"
            name="email"
            required
          />
          <input
          className=" p-3  rounded border-2 border-gray-600 w-96 bg-transparent"
            type="password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, [e.target.name]: e.target.value })
            }
            placeholder="Password"
            name="password"
            required
          />
          <button type="submit" name="submit" className=" rounded p-2 w-96 font-bold bg-red-600 text-white">
            Log In
          </button>
        </form>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;

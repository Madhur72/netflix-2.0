import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import background from "../Assets/Home.jpg";
import title from "../Assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGenres } from "../Store/Store";

const NetFlix = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getGenres())
  },[])

  return (
    <div className="relative w-full h-screen">
      <Navbar />
      <div className="top-0 absolute w-full wfull h-screen">
        <img
          src={background}
          className=" w-full h-screen brightness-[.6]	"
          alt=""
        />
      </div>
      <div className=" absolute left-24 bottom-52 ">
        <img src={title} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <button onClick={()=>navigate('/player')}  className=" absolute flex items-center justify-center gap-2 hover:bg-slate-200 bg-white text-black w-28 h-10 bottom-36 left-24 rounded">
          <FaPlay />
          Play
        </button>
        <button className=" absolute flex items-center justify-center gap-2 bg-gray-500 text-white hover:bg-gray-600 hover:brightness-80 w-28 h-10  bottom-36 left-60  rounded">
          <AiOutlineInfoCircle />
          Info
        </button>
      </div>
    </div>
  );
};

export default NetFlix;

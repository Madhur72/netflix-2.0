import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaPowerOff } from "react-icons/fa";
import { firebaseAuth } from "../Utils/firebase.config";
import { signOut, onAuthStateChanged } from "firebase/auth";
const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (user) => {
    if (!user) {
      navigate("/login");
    }
  });

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/list" },
  ];
  return (
      <div className=" top-1 sticky w-full z-10">

      
      <nav className=" w-full  flex justify-between">
        <div className="flex gap-10 items-center px-20 p-2">
          <img className=" h-16" src={logo} alt="logo" />
          <ul className=" flex gap-10">
            {links.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex items-center p-8 gap-3 ">
          <div className={` border-0 flex gap-2 ${search ? "show-search" : ""}`}>
            <button
              className=" p-2"
              onFocus={() => setSearch(true)}
              onBlur={() => (!isHover ? setSearch(false) : "")}
            >
              <FaSearch />
            </button>
            <input
              onMouseEnter={() => setIsHover(true)}
              onBlur={() => {
                setSearch(false);
                setIsHover(false);
              }}
              onMouseLeave={() => setIsHover(false)}
              className=" w-0 invisible opacity-0 border-0 bg-transparent  "
              type="text"
              placeholder="Search"
            />
          </div>
          <button
          className=" text-red-500"
            onClick={() => {
              signOut(firebaseAuth)
                .then(() => {})
                .catch((error) => {});
            }}
          >
            <FaPowerOff size={20} />
          </button>
        </div>
      </nav>
      </div>
  );
};

export default Navbar;

import React from 'react'
import logo from '../Assets/logo.png'
import { useNavigate } from 'react-router-dom'
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className=' flex flex-row justify-between py-2 px-10 w' >
      <div>
        <img className=' h-20 cursor-pointer' src={logo} alt="logo" />
      </div>
      <button className=' mt-5 w-24 h-10 cursor-pointer border-none rounded font-bold  text-white bg-red-600 ' onClick={()=>navigate(props.login?"/login":"/signup")}>
        {props.login?"Log In":"Sign In"}
      </button>
    </div>
  )
}

export default Header

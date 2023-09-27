import React from 'react'
import logo from '../Assets/logo.png'
import { useNavigate } from 'react-router-dom'
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className=' py-0 px-16 ' >
      <div>
        <img className=' h-20 cursor-pointer' src={logo} alt="logo" />
      </div>
      <button className=' py-2 px-px cursor-pointer border-none rounded font-bold text-white bg-red-600 w-28 text-base' onClick={()=>navigate(props.login?"/login":"/signup")}>
        {props.login?"Log In":"Sign In"}
      </button>
    </div>
  )
}

export default Header

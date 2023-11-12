import React from 'react'
import {IoArrowBackOutline} from 'react-icons/io5'
import video from "../Assets/Video.mp4"
import { useNavigate } from 'react-router-dom'

const Player = () => {
    const navigate = useNavigate()
  return (
    <div className=' relative'>
        <div className=' absolute z-10 top-6 left-6'>
            <IoArrowBackOutline size={35} className=' cursor-pointer' onClick={()=>navigate(-1)}/>
        </div>
        <video className=' w-full h-screen' src={video} controls autoPlay muted loop ></video>
    </div>
  )
}

export default Player
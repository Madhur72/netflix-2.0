import React from 'react'
import background from '../Assets/login.jpg'
const BackgroundImage = () => {
  return (
    <div className=' absolute h-screen w-full'>
      <img className='h-screen w-full' src={background} alt="background" />
    </div>
  )
}

export default BackgroundImage

import React from 'react'
import { mylogo } from '../assets'

const Loader = () => {
  return (
    <div className="bg-primary dark:bg-primary flex flex-col justify-center items-center w-full h-screen overflow-hidden">
      <img src={mylogo} alt="loader" className="animate-pulse w-[96px] md:w-[136px] mb-8" />
    </div>
  )
}

export default Loader
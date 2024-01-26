import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] border-b-2 border-solid border-[#8892b0]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-[#00b894]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Reza Homayuni</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specializing in building and occasionally designing exceptional digital experiences. Currently, I'm focused on building responsive frontend web applications.</p>
            <div>
                <button className='text-white group border-2 rounded-2xl px-6 py-3 my-2 flex items-center hover:bg-[#00b894]  hover:border-[#00b894] '>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home

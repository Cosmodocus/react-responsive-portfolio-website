import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='py-20 bg-[#0a192f] text-gray-300 w-full lg:h-screen md:h-screen' style={{ borderBottom: '2px solid #8892b0' }}>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#00b894] '>Skills</p>
                <p className='py-4 font-bold'>These are all the skills I'm experienced with:</p>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-12 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500 p-2'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-5'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500 p-2'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-5'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500 p-2'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-5'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500 p-2'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-5'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500 p-2'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-5'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500 p-2'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-5'>GitHub</p>
                </div>
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                    <p className='my-4'>Node Js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                    <p className='my-4'>Mongo DB</p>
                </div> */}
                
            </div>
        </div>
    </div>
  )
}

export default Skills

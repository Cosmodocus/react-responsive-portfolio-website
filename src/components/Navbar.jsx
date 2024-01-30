import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import iconImage from '../assets/icon.png'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 pb-4">
        <div>
            <h1 className='flex items-center text-3xl gap-2 font-bold text-[#00b894] hover:scale-110 transition-all duration-50 px-3'>Creative<span className='text-[#ccd6f6]'>Rez</span> 
            <img src={iconImage} alt="icon image" className='w-[40px]'/>
            </h1>
            
        </div>

        {/* MENU */}
        <ul className='hidden md:flex font-bold'>
            <li className='hover:text-[#00b894] duration-75'>
                <Link          
                    to="home" 
                    smooth={true}   
                    offset={50} 
                    duration={500} >
                    Home
                </Link>
            </li>
            <li className='hover:text-[#00b894]  duration-75'>
                <Link             
                    to="about" 
                    smooth={true} 
                    offset={50} 
                    duration={500} >
                    About
                </Link>
            </li>    
            <li className='hover:text-[#00b894]  duration-75'>
                <Link             
                    to="skills" 
                    smooth={true} 
                    offset={50} 
                    duration={500} >
                    Skills
                </Link>
            </li>    
            <li className='hover:text-[#00b894]  duration-75'>
                <Link             
                    to="work" 
                    smooth={true} 
                    offset={50} 
                    duration={500} >
                    Work
                </Link>
            </li>    
            <li className='hover:text-[#00b894]  duration-75'>
                <Link             
                    to="contact" 
                    smooth={true} 
                    offset={50} 
                    duration={500} >
                    Contact
                </Link>
            </li>    
          
        </ul>

        {/* HAMBURGER */}
        <div onClick={handleClick} className='md:hidden z-10 text-2xl cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        
        
        {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li  className='py-6 text-4xl hover:text-[#00b894]  duration-75'>
                 <Link onClick={handleClick}            
                    to="home" 
                    smooth={true}   
                    offset={50} 
                    duration={500} >
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#00b894]  duration-75'>
                <Link onClick={handleClick}            
                    to="about" 
                    smooth={true} 
                    offset={50} 
                    duration={500} >
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#00b894]  duration-75'>
                <Link  onClick={handleClick}           
                    to="skills" 
                    smooth={true} 
                    offset={50} 
                    duration={500} >
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#00b894]  duration-75'>
                <Link  onClick={handleClick}           
                    to="work" 
                    smooth={true} 
                    offset={50} 
                    duration={500} >
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#00b894]  duration-75'>
                <Link  onClick={handleClick}           
                    to="contact" 
                    smooth={true} 
                    offset={50} 
                    duration={500} >
                    Contact
                </Link>
            </li>
        </ul>
        
        
        {/* SOCIAL ICONS */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/reza-homayuni-0503861b6/" target="_blank">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/Cosmodocus" target="_blank">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:homayunir@gmail.com" target="_blank">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/" target="_blank">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default NavBar

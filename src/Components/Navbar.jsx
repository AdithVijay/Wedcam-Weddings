import React from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  return (
    <div>
        <div className=' text-2xl bg-[#F8F4ED] flex justify-around shadow-2xl z-20 fixed h-[100px] w-full items-center '>
            <div>
                <NavLink className=" text-[#8E8E8E]" to="/mmmmmm"><img className=' bg-black' src={""} alt="" /></NavLink>
            </div>
            
            <div  className='gap-12 md:flex  hidden'>
            <hr className=' bg-[#8E8E8E] w-10 h-0.5 my-auto'/>
                <div>
                    <NavLink className=" text-[#8E8E8E]" activeclassname="active" to="/">HOME</NavLink>
                </div>
                <div>
                    <NavLink className=" text-[#8E8E8E]" to="/menu">GALLERY</NavLink>
                </div>
                <div>
                    <NavLink className=" text-[#8E8E8E]" to="/albums">FILMS</NavLink>
                </div>
                <div>
                    <NavLink className=" text-[#8E8E8E]" to="/about">ABOUT US</NavLink>
                </div>
                <div>
                    <NavLink className=" text-[#8E8E8E]" to="/contact">CONTACT US</NavLink>
                </div>
                <hr className='bg-[#8E8E8E]  w-10 h-0.5 my-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className=' text-2xl bg-[#F8F4ED] flex justify-around shadow-2xl z-20 fixed h-[100px] w-full items-center '>
            <div>
                <NavLink className=" text-[#8E8E8E]" to="/mmmmmm">Logo</NavLink>
            </div>
            
            <div  className='gap-12 md:flex  hidden'>
            <hr className=' bg-[#8E8E8E] w-10 h-0.5 my-auto'/>
                <div>
                    <NavLink className=" text-[#8E8E8E]" activeclassname="active" to="/">Home</NavLink>
                </div>
                <div>
                    <NavLink className=" text-[#8E8E8E]" to="/menu">Menu</NavLink>
                </div>
                <div>
                    <NavLink className=" text-[#8E8E8E]" to="/about">About</NavLink>
                </div>
                <div>
                    <NavLink className=" text-[#8E8E8E]" to="/contact">Contact</NavLink>
                </div>
                <hr className='bg-[#8E8E8E]  w-10 h-0.5 my-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
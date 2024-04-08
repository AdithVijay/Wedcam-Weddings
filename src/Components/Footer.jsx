import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';
import logo from "../assets/logo.png";


const Footer = () => {
  return (
    <div className=' bg-[#F8F4ED] text-[#8E8E8E] relative top-24 ' >
      <div className=' flex justify-center md:pb-5 pt-10'>
        <div className='top flex justify-around flex-col md:flex-row md:gap-36 gap-5 items-center'>
          <div className='left flex gap-4'>
            <NavLink to='/' className='font-Cheesebase text-xl'>
              Home
            </NavLink>
            <NavLink to='/about' className='font-Cheesebase text-xl'>
              About
            </NavLink>
            <NavLink to='/menu' className='font-Cheesebase text-xl'>
              Menu
            </NavLink>
            <NavLink to='/contact' className='font-Cheesebase text-xl'>
              Contact us
            </NavLink>
          </div>
          <div className='right flex gap-3 '>
            <div>
              <CiInstagram className=' size-8' />
            </div>
            <div>
              <FaFacebook className=' size-8' />
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#8E8E8E] w-[90%] flex mx-auto " />
      <div className='down flex md:flex-row flex-col justify-center items-center md:gap-16 gap-10 pt-5 pb-10 pl-5 '>
        <div className='left md:w-[30%] w-[90%]'>
          <div className='  pb-3 md:text-left flex items-center justify-center text-2xl text-center '>STORIES FROM WEDCAM WEDDING</div>
          <div className=''>
          Beyond posed perfection, we seek the raw, unscripted moments—the laughter that spills like champagne, the tears that write their own ballads. Our lenses are storytellers, narrating the epic of two souls entwined against a canvas of sunsets and moonrise.
          </div>
        </div>

        <div>
          <img className=' w-[200px]' src={logo} alt='' />
        </div>

        <div className='right md:w-[30%] w-[90%] text-pretty'>
          <div className=' text-3xl pb-4'>Contact Adress</div>
          <div>Mavoor Rd, Parayancheri, Kottooli, Kozhikode, Kerala 673016</div>
          <div className=' pt-3'>call us</div>
          <div>9447271120</div>
          <div className=' pt-3'>email</div>
          <div className=' mb-10'>adithvijay121@gamil</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

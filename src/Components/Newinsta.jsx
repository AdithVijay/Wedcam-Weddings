import React, { useEffect, useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import insta1 from "../assets/insta1.jpg";
import insta2 from "../assets/insta2.jpg";
import insta3 from "../assets/insta3.jpg";
import insta4 from "../assets/insta4.jpg";
import insta5 from "../assets/insta5.jpg";
import insta6 from "../assets/insta6.jpg";




const Insta = () => {
  const [isloaded, setisloaded] = useState(false)
  useEffect(() => {
    setisloaded(true)
  }, [])
  
  return (
    <div className='md:w-[90%] lg:w-[75%] 2xl:w-[60%] w-[115%] '>
    <div  className=' grid grid-cols-3 grid-flow-row-dense md:gap-4 gap-1 mx-10    '>
      <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
    <img src={insta1} alt="" className='hover:scale-105 transition  duration-1000    row-span-2 rounded-md  overflow-hidden ' />
      </a>
      <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
    <img src={insta1} alt="" className='  row-span-2 rounded-md  overflow-hidden ' />
      </a>
      <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
    <img src={insta4} alt="" className='  row-span-2 rounded-md   overflow-hidden ' />
      </a>
      <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
    <img src={insta4} alt="" className='  row-span-2 rounded-md   overflow-hidden ' />
      </a>
      <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
    <img src={insta5} alt="" className='  row-span-2 rounded-md   overflow-hidden ' />
      </a>
      <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
    <img src={insta4} alt="" className='  row-span-2 rounded-md   overflow-hidden ' />
      </a>
  </div>
  <div className='flex justify-center pt-10 hover:scale-105 transition   duration-1000 '>
    <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA=="><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Follow Us
    </button></a>
  </div>
    </div>
  )
}

export default Insta
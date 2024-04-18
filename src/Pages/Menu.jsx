import React, { useEffect, useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import insta1 from "../assets/center_01.jpg";
import insta3 from "../assets/gal12.jpg";
import insta22 from "../assets/art3.jpg";
import insta20 from "../assets/gal20.jpg";
import insta21 from "../assets/gal21.jpg";
import insta17 from "../assets/gal17.jpg";
import insta6 from "../assets/gal7.jpg";
import insta4 from "../assets/37.jpg";
import center_03 from "../assets/right_03.jpg";
// import insta5 from "../assets/art2.jpg";
import insta5 from "../assets/0005-2.jpg";
import insta14 from "../assets/gal14.jpg";
import insta15 from "../assets/gal15.jpg";
import insta19 from "../assets/gal19.jpg";
import gal23 from "../assets/gal23.jpg";
import har5 from "../assets/har5.jpg";
// import insta6 from "../assets/insta6.jpg";
import Footer from '../Components/Footer';




const Insta = () => {
  const [isloaded, setisloaded] = useState(false)
  useEffect(() => {
    setisloaded(true)
  }, [])
  
  return (
    <div>
    <div className='md:w-[90%] lg:w-[75%] 2xl:w-[60%] w-[115%] pt-20 mx-auto'>
      <div className='grid md:grid-cols-3 grid-cols-1 grid-flow-row-dense md:gap-10 md:p-0 px-10  gap-7'>
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={gal23} alt="Photography webcam weddings Vishnu Santosh " className=' duration-1000 row-span-2 rounded-md overflow-hidden' />
        </a>
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={ center_03} alt="Photography  webcam weddings Vishnu Santosh" className='row-span-2  h-full rounded-md overflow-hidden' />
        </a>
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={har5} alt="Photography  webcam weddings Vishnu Santosh " className='row-span-2  rounded-md  overflow-hidden' />
        </a>
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={insta4} alt="Photography  webcam weddings Vishnu Santosh" className=' h-full row-span-2 rounded-md overflow-hidden' />
        </a>
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={insta5} alt="Photography  webcam weddings Vishnu Santosh" className='row-span-2    rounded-md overflow-hidden' />
        </a>
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={insta22} alt="Photography  webcam weddings Vishnu Santosh" className='  row-span-2  rounded-md overflow-hidden' />
        </a>
      
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={insta21} alt="Photography  webcam weddings Vishnu Santosh" className='row-span-2 rounded-md   overflow-hidden' />
        </a>
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={insta6} alt="Photography  webcam weddings Vishnu Santosh" className=' row-span-2 object-cover  h-full rounded-md overflow-hidden' />
        </a>
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={insta17} alt="Photography  webcam weddings Vishnu Santosh" className='row-span-2 rounded-md   overflow-hidden' />
        </a>
     
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={insta14} alt="Photography  webcam weddings Vishnu Santosh" className='row-span-2 rounded-md   overflow-hidden' />
        </a>
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={insta20} alt="Photography  webcam weddings Vishnu Santosh" className='row-span-2 rounded-md   overflow-hidden' />
        </a>
     
        <a href="https://www.instagram.com/wedcam_wedding?igsh=MXduNGMxZGptYmJmdA==">
          <img src={insta19} alt="Photography  webcam weddings Vishnu Santosh" className='row-span-2 rounded-md   overflow-hidden' />
        </a>
      </div>
    </div>
    <Footer/>
  </div>
  
  )
}

export default Insta
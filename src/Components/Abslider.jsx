import React, { useState } from 'react'

import act2 from "../assets/act2.jpeg";
import act3 from "../assets/act3.jpeg";
import act4 from "../assets/act4.jpeg";
import act5 from "../assets/act5.png";
import act7 from "../assets/act7.jpeg";
import act8 from "../assets/act8.jpeg";
import act9 from "../assets/act9.jpeg";


import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const Slider = () => {
    const imgs=[
        {
            img:act2
        },
        {
            img:act7
        },
        {
            img:act4
        },
        {
            img:act3
        },
        {
            img:act9
        }
    ]
    const [first, setfirst] = useState(0)
    function plus(){
        setfirst((prev)=>(prev+1)%imgs.length)
    }
    function minus(){
        setfirst((prev)=> prev === 0 ? imgs.length - 1 : prev - 1)
    }
  return (
    <div className=' w-full p-8 '>
        <div className=' relative ring-neutral-900   w-[100%] lg:w-[100%] mx-auto  rounded-3xl  overflow-hidden  '>
          <img src={imgs[first].img} alt=""  className=' w-[100%] mx-auto   object-cover   max-h-[600px] ' />
          
          <span className=' flex absolute md:text-2xl  z-10 top-[45%]     justify-around gap-[85%]     my-auto    w-[100%] text-white  '>
              <button onClick={plus} className=''><HiChevronLeft className=' md:size-10 size-7 ' />  </button>
              <button className=' ' onClick={minus}> <HiChevronRight className=' md:size-10 size-7 '/> </button>
          </span>
        </div>
    </div>
  )
}

export default Slider
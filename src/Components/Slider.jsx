import React, { useState } from 'react'
import pic7 from "../assets/pic7.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const Slider = () => {
    const imgs=[
        {
            img:pic7
        },
        {
            img:pic2
        },
        {
            img:pic3
        },
        {
            img:pic4
        },
    ]
    const [first, setfirst] = useState(0)
    function plus(){
        setfirst((prev)=>(prev+1)%imgs.length)
    }
    function minus(){
        setfirst((prev)=> prev === 0 ? imgs.length - 1 : prev - 1)
    }
  return (
    <div className=' w-full mb-14'>
        <div className=' relative ring-neutral-900   w-[100%] lg:w-[100%] mx-auto    '>
          <img src={imgs[first].img} alt=""  className=' w-[100%]  mx-auto   object-cover   max-h-[600px] ' />
          
          <span className=' flex absolute md:text-2xl  z-10 top-[45%]     justify-around gap-[85%]     my-auto    w-[100%] text-white  '>
              <button onClick={plus} className=''><HiChevronLeft className=' md:size-10 size-7 ' />  </button>
              <button className=' ' onClick={minus}> <HiChevronRight className=' md:size-10 size-7 '/> </button>
          </span>
        </div>
    </div>
  )
}

export default Slider
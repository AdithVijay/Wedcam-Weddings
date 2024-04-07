import React from 'react'
import articlelogo1 from "../assets/articlelogo1.png";

import articlelogo3 from "../assets/articlelogo3.png";

import articlelogo4 from "../assets/articlelogo4.png";
import articlelogo5 from "../assets/articlelogo5.png";

const Articles = () => {
  return (
    <div className='  w-[100%]'>
        <div className=' p-2 flex flex-row lg:gap-10 md:gap-32 gap-10 items-center justify-center  '>
          <div className='flex lg:flex-row flex-col  gap-10 items-center '>
            <img className=' md:w-[290px] md:h-[30px] w-[220px] h-[20px] ' src={articlelogo1} alt="" />
            <img className=' md:w-[290px] md:h-[50px] w-[220px] h-[30px]' src={articlelogo5} alt="" />
          </div>
          <div className='flex lg:flex-row flex-col  gap-10   '>
            <img className='  md:w-[290px] md:h-[40px] w-[220px] h-[25px]' src={articlelogo3} alt="" />
            <img className=' md:w-[150px] md:h-[20px] w-[110px] md:mb-5 mt-0 ' src={articlelogo4} alt="" />
            
          </div>
        </div>
    </div>
  )
}

export default Articles
import React from 'react'
import articlelogo1 from "../assets/articlelogo1.png";
import articlelogo2 from "../assets/articlelogo2.png";
import articlelogo3 from "../assets/articlelogo3.png";
import articlelogo4 from "../assets/articlelogo4.avif";

const Articles = () => {
  return (
    <div className='  w-[100%]'>
        <div className=' p-2 flex flex-row md:gap-30 gap-10 items-center justify-center '>
          <div className='flex md:flex-row flex-col gap-0 '>
            <img className='  w-[220px] h-[120px]' src={articlelogo1} alt="" />
            <img className=' w-[120px] h-[120px] ml-10 ' src={articlelogo2} alt="" />
          </div>
          <div className='flex md:flex-row flex-col gap-0 '>
            <img className=' w-[120px] h-[120px]' src={articlelogo3} alt="" />
            <img className=' w-[190px] h-[120px] ' src={articlelogo4} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Articles
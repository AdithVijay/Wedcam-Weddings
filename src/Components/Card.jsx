import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({description,images}) => {
  return (
    <div>
        <div className=' flex  flex-col m-6 '>
            <div >
                <img className='hover:scale-105 transition   duration-1000  h-96 lg:h-[30rem] object-cover overflow-hidden rounded-xl  min-w-[100%]' src={images} alt="" />
            </div>
            <div className=' flex flex-col items-center'>
                <div className=" text-[#8E8E8E] text-2xl">
                    {description}
                </div>
                <div>
                <NavLink className=" text-[#8E8E8E]" to="/menu">Explore Now</NavLink>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Card
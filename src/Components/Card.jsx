import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({description,images}) => {
  return (
    <div>
        <NavLink to="/menu">
            <div className=' flex  flex-col m-6 '>
                <div >
                    <img className='hover:scale-105 transition   duration-1000   h-96 lg:h-[30rem] object-cover overflow-hidden rounded-xl  min-w-[100%]' src={images} alt="" />
                </div>
                <div className=' flex flex-col items-center'>
                    <div className=" text-[#8E8E8E] md:text-2xl text-xl pt-4">                                                                                                                          
                        {description}
                    </div>
                    <div>
                    <NavLink className=" text-[#8E8E8E] flex items-center " to="/menu">Explore Now <FaArrowRightLong className=' pl-1' /> </NavLink>
                    </div>
                </div>
            </div>
        </NavLink>
    </div>
   
  )
}

export default Card
import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({description,images}) => {
  return (
    <div>
        <div className=' flex  flex-col m-6 '>
            <div >
                <img className=' h-96 lg:h-[30rem] object-cover  min-w-[100%]' src={images} alt="" />
            </div>
            <div className=' flex flex-col items-center'>
                <div>
                    {description}
                </div>
                <div>
                <NavLink className=" text-[#8E8E8E]" to="/menu">Menu</NavLink>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Card
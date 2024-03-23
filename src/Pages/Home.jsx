import React from 'react'
import Slider from '../Components/Slider'
import Card from '../Components/Card'
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import line from "../assets/line.webp";

const Home = () => {
  return (
    <div>

      <Slider/>
      <div className=' flex flex-col justify-center items-center mb-[60px]'>
        <hr className='  md:w-[80%] w-[90%]'/>
            <div className=' flex items-center justify-center md:h-36  text-[#8E8E8E] text-xl text-center'>
              <div className='  md:w-[70%] w-[90%] '>
                "Our wedding photographer in kerala is not just capturing photos, He is capturing the unforgettable moments in life of amazing couples. Whether
                it's an arranged marriage or a love marriage, every pair has a special story to share. "
              </div>
            </div>
        <hr  className='  md:w-[80%] w-[90%]'/>
      </div>
      <div className=' text-4xl text-[#8E8E8E] flex justify-center '>
         Our Services
      </div>
      <div className='text-[#8E8E8E] flex justify-center text-xl '>
         Premium Wedding Photography And videography
      </div>
      <div className=' flex justify-center'>
        <img src={line} alt="" />
      </div>
      
        <div className='flex flex-col lg:flex-row items-center justify-center'>
            <div className='flex flex-col md:flex-row '>
              <Card description={"Hiii guiyssss"} images={card1} />
              <Card description={"Hiii guiyssss"} images={card2} />
            </div>
            <div className=' flex '>
              <Card description={"Hiii guiyssss"} images={card3} />
            </div>
        </div>




    </div>
  )
}

export default Home
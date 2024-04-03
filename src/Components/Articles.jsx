import React from 'react'
import art1 from "../assets/art1.jpg";
import art3 from "../assets/art3.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Articles = () => {
  return (
    <div className=' flex flex-col md:flex-row gap-8 '>
        <div className=' flex flex-col justify-center items-center '>
            <a target="_blank" href="https://www.google.com/imgres?imgurl=https://static.toiimg.com/photo/105099903.cms&tbnid=nLnDXrI1zz8j7M&vet=1&imgrefurl=https://timesofindia.indiatimes.com/tv/web-stories/malayalam/unseen-wedding-pictures-of-haritha-g-nair/photostory/105099903.cms&docid=f-YRkCLhh37K6M&w=720&h=1280&source=sh/x/im/m1/2&kgs=06df929d65d57690&shem=abc">
                <img className=' h-[480px] w-[330px]' src={art1} alt="" />
            </a>
            <div className='  text-center  text-[#8E8E8E] text-xl w-[80%] pt-2 '>
            Unseen wedding pictures of Haritha G Nair​ | Times of India
             <br />
             <a target="_blank"  className=' flex justify-center items-center text-2xl pt-2 ' href="https://www.google.com/imgres?imgurl=https://static.toiimg.com/photo/105099903.cms&tbnid=nLnDXrI1zz8j7M&vet=1&imgrefurl=https://timesofindia.indiatimes.com/tv/web-stories/malayalam/unseen-wedding-pictures-of-haritha-g-nair/photostory/105099903.cms&docid=f-YRkCLhh37K6M&w=720&h=1280&source=sh/x/im/m1/2&kgs=06df929d65d57690&shem=abc">
              Read More 
              </a>
            </div>
        </div>
        <div className=' flex flex-col justify-center items-center  '>
            <a target="_blank" href="https://images.app.goo.gl/BYBES5yQKMDuLDKZ7">
                <img className=' h-[480px] w-[330px]' src={art3} alt="" />
            </a>
            <div className='  text-center  text-[#8E8E8E] text-xl w-[80%] pt-2 '>
            സഹതാപം വേണ്ട ! ഇത് നിലാവ് പോലെ ...
             <br />
             <a target="_blank" className=' flex justify-center items-center text-2xl pt-2 ' href="https://images.app.goo.gl/BYBES5yQKMDuLDKZ7">
              Read More 
              </a>
            </div>
        </div>
    </div>
  )
}

export default Articles
import React from 'react'
import vishnu from "../assets/vishnu.jpeg";
import line from "../assets/line.webp";
import Footer from '../Components/Footer';
import Abslider from "../Components/Abslider";
import Insta from '../Components/Insta';

const About = () => {
  return (
    <div>
       <Abslider/>
        <div className='relative  text-[#8E8E8E] p-1 '> 
          <div className=' flex justify-center md:text-5xl text-3xl  text-center'>
              Capturing moments of unplanned love: The WedCam Weddings
            </div> 
            <div className=' flex justify-center md:pb-12 pb-5'>
              <img src={line} alt="" />
            </div>
            <div className='flex lg:flex-row flex-col justify-center items-center md:gap-20 gap-10 pb-24'>
              <div className='left lg:w-[55%] 2xl:w-[25%] w-[90%] flex items-center rounded-lg  overflow-hidden '>
                  <img src={vishnu} alt="" />
              </div>
              <div className=' right lg:w-[35%] w-[90%] md:text-xl  text-pretty '>
              <span className=' text-3xl'> Meet Vishnu Santhosh </span>the brain behind WedCam Weddings , an engineering alumnus turned master of the art behind the lens, shaping dreams and emotions into captivating frames within the enchanting realm of wedding photography and filmmaking. <br /> <br />
                In his own Words - <br /> <br /> Wedcam Wedding Company is dedicated to capturing the beauty and emotions of your special day through exceptional photography and videography services. Our team of experienced professionals understands the importance of preserving your wedding memories in the most stunning and authentic way possible. We pride ourselves on our creativity, attention to detail, and commitment to delivering high-quality images and videos that you will cherish for a lifetime. From intimate ceremonies to grand celebrations, Wedcam Wedding Company is here to ensure that every moment is beautifully documented for you to relive and share with your loved ones. Let us help you tell your unique love story through our lens.
              </div>
            </div>
            <div className=" flex flex-col items-center">
        <hr className="  md:w-[80%] w-[90%]  mb-14 mt-14" />
        <div className="text-[#8E8E8E] text-4xl">Follow Our Instagram</div>
        <div className="text-[#8E8E8E] text-xl mt-4">For Regular Updates</div>
        <div className=" flex justify-center mb-12">
          <img src={line} alt="" />
        </div>
        <Insta />
      </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About
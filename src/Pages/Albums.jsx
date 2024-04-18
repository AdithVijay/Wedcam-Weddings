import React from 'react'
import line from "../assets/line.webp";
import Footer from '../Components/Footer';

const Albums = () => {
  return (
    <div className='pt-10'>
        <div className=" md:text-4xl text-2xl text-[#8E8E8E] flex justify-center ">
        WEDDING FILMS
      </div>
      <div className="text-[#8E8E8E] flex justify-center text-center mt-4 text-xl ">
      Capturing the magic of your special day, one frame at a time
      </div>
      <div className="text-[#8E8E8E]  md:w-[70%] w-[90%] flex text-center mx-auto ">
      "Creating timeless wedding films means capturing every magical moment, from heartfelt vows to joyful celebrations, preserving them forever. Let us help you cherish your special day in a film that lasts a lifetime."
      </div>
      <div className=" flex justify-center mb-12">
        <img src={line} alt="" />
      </div>


      <div className='w-full flex md:flex-row flex-col justify-center p-10 w-full gap-12' >
           <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/_YGw0SHWjXU?si=DESt0xyyIw7oJEmj"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} 
            style={{ borderRadius: '10px' }} 
            >
            </iframe>
           
                 <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/lhoGyFuUaNU?si=gPSXGVU3DTO9VM-P"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} 
            style={{ borderRadius: '10px' }} 
            >
                 </iframe>

             <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/Sp-TalpzXug?si=xu9Y6P5CgtzSWh20"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
             </iframe>

         </div>
      

      <div className='w-full flex md:flex-row flex-col  justify-center p-10 gap-12' >
          <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/evuxKBNSs14?si=-_gNf4DwFMvnmyaX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
          </iframe>

          <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/-ixVhxudXek?si=XvjRq04zvjuYIq3t"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
          </iframe>

          <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/xi91f6F3Aqg?si=aQGjQYVU2dNE369B"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
          </iframe>
      </div>
      <div className='w-full flex md:flex-row flex-col  justify-center p-10 gap-12' >
          <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/CMBjAiHk-QY?si=hx2vzQiN1cTbVst_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
          </iframe>

          <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/J7heGPyIMoA?si=z3eCsbA-Np_r9FLi"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
          </iframe>

          <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/g0j-xIuB8AA?si=tos3bv3KFR9-TAW9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
          </iframe>        
      </div>
    
      <div className='w-full flex md:flex-row flex-col  justify-center p-10 gap-12' >
          <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/7iKdA6ux7xc?si=xfSa_4bPXwK6R2JN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
          </iframe>

          <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/0GYjJ4d6PoQ?si=bZyqSTqzu5SfUSf5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
          </iframe>

          <iframe
            className=' aspect-video md:w-[60%] '
            src="https://www.youtube.com/embed/vOA8aIz4UEI?si=dB_C5ZlW8uiKzC3k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} style={{ borderRadius: '10px' }} >
          </iframe>
      </div>


     <Footer/>
    </div>
  )
}

export default Albums

import React from 'react'
import articlelogo1 from "../assets/articlelogo1.png";
import articlelogo3 from "../assets/articlelogo3.png";
import articlelogo4 from "../assets/articlelogo4.png";
import articlelogo5 from "../assets/articlelogo5.png";
import articlelogo6 from "../assets/articlelogo6.png";

const Articles = () => {
  return (
    <div className='  w-[100%]'>
        <div className=' p-2 flex flex-row lg:gap-10 md:gap-32 gap-10 items-center justify-center  '>
          <div className='flex lg:flex-row flex-col  gap-10 items-center '>
          <a target='_blank' href="https://www.manoramaonline.com/web-stories/movies/2023/11/09/actress-haritha-g-nair-ties-the-knot-with-vinayak.html">
  <img className='md:w-[290px] md:h-[30px] w-[220px] h-[20px]' src={articlelogo1} alt="" />
      </a>
          <a target='_blank' href="https://www.manoramaonline.com/web-stories/movies/2023/11/09/actress-haritha-g-nair-ties-the-knot-with-vinayak.html">

            <img className=' md:w-[290px] md:h-[50px] w-[220px] h-[30px]' src={articlelogo5} alt="" />
      </a>

          </div>
          <div className='flex lg:flex-row flex-col  gap-10   '>
          <a target='_blank' href="https://www.mathrubhumi.com/movies-music/news/actress-haritha-g-nair-and-editor-vs-vinayak-married-photos-1.9058543">
            
            <img className='  md:w-[290px] md:h-[40px] w-[220px] h-[25px]' src={articlelogo3} alt="" />
      </a>

          <a target='_blank' href="https://www.google.com/imgres?imgurl=https://img.republicworld.com/rimages/399812133_717330059960580_5151365490204814096_n-1699546403098.webp?tr%3Dw-600&tbnid=Qqj3uqvzHnYBlM&vet=1&imgrefurl=https://www.republicworld.com/entertainment/malayalam-cinema/haritha-g-nair-ties-the-knot-with-drishyam-2-editor-vinayak-vs-bestfriends-to-soulmates/&docid=VdhAr5nTECadgM&w=600&h=750&itg=1&hl=en&source=sh/x/im/m5/2&kgs=9c146b613bb83970&shem=abc">

            <img className=' md:w-[150px] md:h-[20px] w-[110px] md:mb-5 mt-0 ' src={articlelogo4} alt="" />
      </a>

          </div>
        </div>
        {/* <div className=' flex justify-center mt-5 '>
          <img className=' md:w-[150px] md:h-[40px] w-[110px] md:mb-5 mt-0 ' src={articlelogo6} alt="" />
          </div> */}
    </div>
  )
}

export default Articles
import React from 'react'

const Youtube = () => {
  return (
   
    <div className='w-full flex justify-center' >
         <div className='w-full flex justify-center'>
          <iframe   className=' aspect-video md:w-[60%] ' src="https://www.youtube.com/embed/lhoGyFuUaNU?si=hoGCuOPreRvFVXEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
    </div>
   
  )
}

export default Youtube
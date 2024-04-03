import React, { useEffect, useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
const Insta = () => {
  const [isloaded, setisloaded] = useState(false)
  useEffect(() => {
    setisloaded(true)
  }, [])
  
  return (
    <div className='w-[90%]'>
       <div  className=' grid grid-cols-3 grid-flow-row-dense gap-4 mx-10'>
   

   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt="" className='' />
   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt="" className='' />
   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt="" className='' />
   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt=" " className='' />
   <img src="https://images.unsplash.com/photo-1531966662811-c6501e46eda6?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='  row-span-2  ' />
   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt="" className='' />
   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt=" " className='' />
   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt="" className='' />
   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt=" " className='' />
  </div>
    </div>
  )
}

export default Insta
import React, { useEffect, useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
const Insta = () => {
  const [isloaded, setisloaded] = useState(false)
  useEffect(() => {
    setisloaded(true)
  }, [])
  
  return (
    <div>
       <div  style={{ display: 'flex', justifyContent: 'center' }}>
   {isloaded && (<InstagramEmbed url="https://www.instagram.com/_viishnu_santhosh?igsh=NzIycHd3YW52NnVk" width={650} />)}
  </div>
    </div>
  )
}

export default Insta
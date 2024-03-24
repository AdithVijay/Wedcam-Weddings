import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Customersay = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    const data=[
        {
            name:'Jhon',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi recusandae rerum magni? Reprehenderit, voluptatem. Laborum corrupti, expedita aperiam et velit itaque cumque, cum mollitia, quaerat ipsum dignissimos reiciendis harum.'
        },
        {
            name:'Jhon',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi recusandae rerum magni? Reprehenderit, voluptatem. Laborum corrupti, expedita aperiam et velit itaque cumque, cum mollitia, quaerat ipsum dignissimos reiciendis harum.'
        },
        {
            name:'Jhon',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi recusandae rerum magni? Reprehenderit, voluptatem. Laborum corrupti, expedita aperiam et velit itaque cumque, cum mollitia, quaerat ipsum dignissimos reiciendis harum.'
        },
        {
            name:'Jhon',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi recusandae rerum magni? Reprehenderit, voluptatem. Laborum corrupti, expedita aperiam et velit itaque cumque, cum mollitia, quaerat ipsum dignissimos reiciendis harum.'
        },
        {
            name:'Jhon',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi recusandae rerum magni? Reprehenderit, voluptatem. Laborum corrupti, expedita aperiam et velit itaque cumque, cum mollitia, quaerat ipsum dignissimos reiciendis harum.'
        },
        {
            name:'Jhon',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi recusandae rerum magni? Reprehenderit, voluptatem. Laborum corrupti, expedita aperiam et velit itaque cumque, cum mollitia, quaerat ipsum dignissimos reiciendis harum.'
        },
    
    ]
   
  return (
    <div className=''>
        <Slider {...settings}>
        {data.map((x,index)=>(
                <div key={index}>
                    <p>{x.name}</p>
                    <p>{x.review}</p>
                </div>
                 ))}
         </Slider>
    </div>
  )
}

export default Customersay;

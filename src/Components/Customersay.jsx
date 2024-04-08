import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import pic2 from "../assets/pic2.jpg";
import pic4 from "../assets/pic4.jpg";
import review1 from "../assets/review1.png";



function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768, // width to change settings
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-10">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[500px] text-black rounded-xl">
            <div className='h-56 flex justify-center items-center rounded-t-xl'>
              <div  alt="" className=" w-32 h-32 pt-8 font-bold text-6xl text-white  rounded-full flex justify-center bg-[#5D4037] ">
                {d.img}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl text-[#8E8E8E]  font-semibold">{d.name}</p>
              <p className="text-center text-[#8E8E8E] ">{d.review}</p>
           
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `Akshay Sudhi`,
    img: "A",
    review: `I'm glad to say that I got a very positive experience with the webcam wedding team! The excellent quality of photos and videos, especially highlight video and with a prompt delivery of the album& video link reflects your professionalism. Thank you so much to Vishnu&Team.`
  },
  {
    name: `Suman Shah.S`,
    img: "S",
    review: `We hired Wedcam Weddings for our destination wedding in Alappuzha, and they did an amazing job! They were very accommodating of our requests and went above and beyond to capture all the special details. The photos are truly magical and transport us back to that special day every time we look at them.`
  },
  {
    name: `Aswathy Manmadhakurup`,
    img: "A",
    review: `We can't recommend Wedcam Weddings highly enough! They are a talented team of photographers who are passionate about their work. They made our wedding day even more special, and we are so grateful for their services`
  },
  {
    name: `Shawn Panayil`,
    img: "S",
    review: `Amazing job creating our dream wedding album. We gave them all the raw photos that was taken from our wedding and he then designed and made a layout and then created the perfect wedding album. Everything looks amazing and the quality is excellent! I would highly recommend working with Wedcam Weddings!`
  },
  {
    name: `Geeta Kumari`,
    img: "G",
    review: `Wedcam Weddings goes above and beyond just photography. They also offer videography services, which we opted for as well. The wedding video is beautifully produced and captures all the highlights of the day. It's a perfect complement to the photos.`
  },
  
];

export default App;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
  {
    name: `Catharin Clement`,
    img: "C",
    review: `Vishnu at Wedcam Weddings is a true professional. He was always responsive to our emails and calls, and he took the time to understand our vision for our wedding day. The final photos exceeded our expectations, and we couldn't be happier with the results.`
  },
  {
    name: `Bizflok Media`,
    img: "B",
    review: `I was a relative of the bride and the wedding took place in Thiruvalla.I looked for wedding photography franchises near Thiruvalla and stumbled upon Vishnu and his team. They did their best to deliver the photos and they were excellent. Very happy with the photos and will recommend to other family and friends.`
  },
  {
    name: `Mubashir Pn`,
    img: "M",
    review: `We chose Vishnu and his team for our engagement and wedding and were very pleased with the photos.They did a good job on the photos and the album.Extremely happy with the outcome.`
  },
  {
    name: `Gaya3 Sankar`,
    img: "G",
    review: `We chose Wedcam and not for one moment we thought it was a bad choice.They delivered excellent photos and showed us hospitality.They respected our choices for the photos and took them the way we wanted.Thank you to Vishnu and his team for a memorable experience`
  },
];

export default App;
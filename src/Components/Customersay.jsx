import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import pic2 from "../assets/pic2.jpg";
import pic4 from "../assets/pic4.jpg";



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
              <img src={d.img} alt="" className="h-44 w-44 rounded-full object-cover"/>
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
    name: `John Morgan`,
    img: card1,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`
  },
  {
    name: `Ellie Anderson`,
    img: card2,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`
  },
  {
    name: `Nia Adebayo`,
    img: card3,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`
  },
  {
    name: `Rigo Louie`,
    img: pic2,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`
  },
  {
    name: `Mia Williams`,
    img: pic4,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`
  },
  
];

export default App;
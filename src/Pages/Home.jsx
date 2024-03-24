import React from "react";
import Slider from "../Components/Slider";
import Card from "../Components/Card";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import line from "../assets/line.webp";
import Insta from "../Components/Insta";
import Customersay from "../Components/Customersay";

const Home = () => {
  return (
    <div>
      <Slider />

      {/* comments */}
      <div className=" flex flex-col justify-center items-center  mb-14">
        <hr className="  md:w-[80%] w-[90%]" />
        <div className=" flex items-center justify-center md:h-36  text-[#8E8E8E] text-xl text-center">
          <div className="  md:w-[70%] w-[90%] ">
            "Our wedding photographer in kerala is not just capturing photos, He
            is capturing the unforgettable moments in life of amazing couples.
            Whether it's an arranged marriage or a love marriage, every pair has
            a special story to share. "
          </div>
        </div>
        <hr className="  md:w-[80%] w-[90%]" />
      </div>
      {/* comments */}

      <div className=" text-4xl text-[#8E8E8E] flex justify-center ">
        Our Services
      </div>
      <div className="text-[#8E8E8E] flex justify-center text-center mt-4 text-xl ">
        Premium Wedding Photography And videography
      </div>
      <div className=" flex justify-center mb-12">
        <img src={line} alt="" />
      </div>

      {/* card section */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col md:flex-row ">
          <Card description={"Hiii guiyssss"} images={card1} />
          <Card description={"Hiii guiyssss"} images={card2} />
        </div>
        <div className=" flex ">
          <Card description={"Hiii guiyssss"} images={card3} />
        </div>
      </div>
      {/* card section */}

      {/* insta page */}
      <div className=" flex flex-col items-center">
        <hr className="  md:w-[80%] w-[90%]  mb-14 mt-14" />
        <div className="text-[#8E8E8E] text-4xl">Follow Our Instagram</div>
        <div className="text-[#8E8E8E] text-xl mt-4">For Regular Updates</div>
        <div className=" flex justify-center mb-12">
          <img src={line} alt="" />
        </div>
        <Insta />
      </div>
      {/* insta page */}

      {/* Customer Says  */}
      <div className=" flex flex-col items-center ">
      <hr className="  md:w-[80%] w-[90%]  mb-14 mt-14" />
        <div className="text-[#8E8E8E] text-4xl">
            TESTIMONIALS
        </div>
        <Customersay/>
        <hr className="  md:w-[80%] w-[90%]  mb-14 mt-14" />
      </div>

    </div>
  );
};

export default Home;

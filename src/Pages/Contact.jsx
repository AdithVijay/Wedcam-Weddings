import React from "react";
import Footer from "../Components/Footer";
import line from "../assets/line.webp";
import {Helmet} from "react-helmet";
const Contact = () => {
  return (
    <div>
         <Helmet>
         <title>Thiruvalla's Best Wedding Studio WedCam Weddings </title>
        <meta
          name="description"

          content="Find the best wedding photographers & videographers in Thiruvalla. Capture your dream wedding with stunning photos & cinematic videos."
        />
      </Helmet>
      <div className="  text-[#8E8E8E] relative md:top-20 top-14  flex justify-center items-center flex-col ">
        <div className=" flex gap-20 justify-center  items-center md:flex-row flex-col md:pl-0 pl-2">
      
          <div className=" 2xl:w-[45%] md:w-[60%] relative  md:-top-14 w-[90%] text-center flex flex-col items-center">
            <div className=" lg:w-[100%] lg:text-7xl text-5xl pb-3">We are creating fiction out of reality</div>
      
            <div className=" text-xl">
              We capture your divine moments to carve an enthralling narrative to
              take over the moon.
            </div>
          </div>
          <div className="  md:w-[45%] w-[90%] flex flex-col md:pr-8 pr-0 ">
            <input className=" text-xl outline-none pb-3 " type="text" placeholder="NAME" />
            <hr  className=" pb-10 "/>
            <input  className=" text-xl outline-none pb-3 "  type="text"  placeholder="EMAIL"/>
            <hr  className=" pb-10"/>
            <input className=" text-xl outline-none pb-3 "  type="text" placeholder="PHONE"/>
            <hr  className=" pb-10"/>
            <textarea className="   text-xl outline-none  " name="" id="" cols="20" rows="3" placeholder="TELL US MORE"></textarea>
            <hr  className=" pb-16"/>
            <button class="bg-black text-white  w-[100px] p-1 rounded ">SUBMIT</button>
          </div>
        </div>
        <div className="  relative">
          <Footer/>
          </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import bg1 from "../assets/1.jpg";
import bg2 from "../assets/2.jpg";
import bg3 from "../assets/3.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = [bg1, bg2,bg3];
  const prev =()=>{
    setCurrentSlide((p)=> (
        p==0? slide.length-1:p-1
    ))
  }
  const next =()=>{
    setCurrentSlide((n)=>(
        n===slide.length-1 ? 0 :n+1
    ))
  }
  return (
    <>
      <div className="relative w-full overflow-hidden mt-20">
        <div className="flex" style={{transform:`translateX(-${currentSlide *100}%)`}}>
          {slide.map((item, index) => (
            <img
              src={item}
              alt=""
              key={index}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      <button className="absolute top-1/2 left-2 -translate-y-1/2 md:left-4 lg:left-6 bg-black/40 text-white p-2 rounded-full z-10 cursor-pointer" onClick={prev}>
        <ArrowBackIosNewOutlinedIcon className="text-[40px] " />
      </button>
      <button className="absolute top-1/2 right-2 -translate-y-1/2 md:right-4 lg:right-6 bg-black/40 text-white p-2 rounded-full z-10 cursor-pointer" onClick={next}>
    
      
        <ArrowForwardIosOutlinedIcon />
      </button>
    </>
  );
};

export default Slider;

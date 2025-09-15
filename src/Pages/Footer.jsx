import React from "react";
import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
     <div className="bg-[#f0f1f3] px-5 py-10 w-full overflow-hidden">
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-[1200px] mx-auto">
    <div className="w-full md:w-2/5 mb-10 md:mb-0 text-center md:text-left">
      <h1 className="text-2xl md:text-4xl font-bold">Mini Store</h1>
      <p className="mt-2 text-justify md:w-[300px] mx-auto md:mx-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        doloribus, debitis commodi, ducimus a inventore officia temporibus,
      </p>
    </div>
    <div className="w-full md:w-3/5 flex flex-col md:flex-row justify-center md:justify-between gap-10">
    
      <div className="text-center md:text-left">
        <h3 className="font-semibold mb-2">Quick Links</h3>
        <div className="flex flex-col gap-2">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>
      </div>

      <div className="text-center md:text-left">
        <h3 className="font-semibold mb-2">Social Links</h3>
        <div className="flex flex-row md:flex-col gap-3 justify-center md:justify-start">
          <CiFacebook className="text-[30px] hover:text-[#0084ff]" />
          <FaWhatsapp className="text-[30px] hover:text-[#0084ff]" />
          <FaInstagram className="text-[30px] hover:text-[#0084ff]" />
        </div>
      </div>


      <div className="text-center md:text-left">
        <h3 className="font-semibold mb-2">Contact Us</h3>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-2">
            <MdLocalPhone className="text-[20px]" /> 98xxxxxxx
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail className="text-[20px]" /> info.minishop.com
          </div>
          <div className="flex items-center gap-2">
            <FaLocationArrow className="text-[20px]" /> Kathmandu, Nepal
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

    </>
  );
};

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
      <div className="bg-[#f0f1f3] h-50 flex  md:flex-row  md:items-start  md:flex  md:justify-between overflow-hidden">
        <div className="w-[40vw] md:w-[60vw] md:mt-5 mx-5 md:mx-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
            Mini Store
          </h1>
          <p className="mt-2 text-justify md:w-[300px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            doloribus, debitis commodi, ducimus a inventore officia temporibus,
          </p>
        </div>
        <div className="w-[60vw] md:w-[40vw] md:mt-5 md:mx-2  flex  md:flex-row justify-center md:justify-between gap-5   ">
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <div className="flex flex-col gap-2 text-start ">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/catalog">Catalog</NavLink>
              <NavLink to="/">About Us</NavLink>
              <NavLink to="/">Contact Us</NavLink>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Socials Links</h3>
            <div className="flex flex-col gap-2 items-center ">
              <NavLink>
                <CiFacebook className="text-[30px] hover:text-[#0084ff]" />
              </NavLink>
              <NavLink>
                <FaWhatsapp className="text-[30px] hover:text-[#0084ff]" />
              </NavLink>
              <NavLink>
                <FaInstagram className="text-[30px] hover:text-[#0084ff]" />
              </NavLink>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <div className="flex flex-col gap-2  ">
              <NavLink className="flex items-center gap-2">
                <MdLocalPhone className="text-[20px]" />
                98xxxxxxx
              </NavLink>
              <NavLink className="flex items-center gap-2">
                <MdOutlineEmail className="text-[20px]" />
                <p>info.minishop.com</p>
              </NavLink>
              <NavLink className="flex items-center gap-2">
                <FaLocationArrow className="text-[20px]" />
                <p>Kathmandu, Nepal</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

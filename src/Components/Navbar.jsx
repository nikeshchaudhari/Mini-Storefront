import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full h-20 bg-[#f8f9fa] flex justify-between items-center fixed top-0  z-10">
        <div className="ml-5">
          <Link to="/home">
            {" "}
            <h1 className="text-[20px] lg:text-[30px] ">Mini Store</h1>
          </Link>
        </div>
        <div className="hidden md:flex gap-10  ">
          <NavLink
            to="/home"
            className={({ isActive }) => {
              return isActive ? "text-[#1077A3]" : "text-black";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => {
              return isActive ? "text-[#1077A3]" : "text-black";
            }}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? "text-[#1077A3]" : "text-black";
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => {
              return isActive ? "text-[#1077A3]" : "text-black";
            }}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="mr-5 md:mr-20 flex gap-5">
          <LocalMallOutlinedIcon />
          {/* Hamburger */}
          <div onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
            {isOpen ? (
              <>
                <CloseOutlinedIcon />
              </>
            ) : (
              <MenuOutlinedIcon  />
            )}
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div >
        {isOpen &&(
            <div className={`bg-black/5 w-[100vw] h-[200px] fixed right-0 
    ${isOpen ? "top-20 opacity-100" : "-top-60 opacity-0"}
  `}>
                <div className="flex flex-col gap-2 ml-8 mt-5">
                    <NavLink to="/home" className={({isActive})=>{
                        return isActive ?"text-[#1077A3]" : "text-black"
                    }}>
                        Home
                    </NavLink>
                    <NavLink to="/shop" className={({isActive})=>{
                        return isActive ?"text-[#1077A3]" : "text-black"
                    }}>
                        Shop
                    </NavLink>
                    <NavLink to="/about" className={({isActive})=>{
                        return isActive ?"text-[#1077A3]" : "text-black"
                    }}>
                        About
                    </NavLink>
                    <NavLink to="/contact-us" className={({isActive})=>{
                        return isActive ?"text-[#1077A3]" : "text-black"
                    }}>
                        Contact Us
                    </NavLink>
                </div>

            </div>
        )}
      </div>

    </>
  );
};

export default Navbar;

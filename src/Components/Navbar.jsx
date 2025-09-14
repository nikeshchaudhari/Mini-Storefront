import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import cartStore from "../store/store";
import Cart from "../Pages/Cart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[cartOpen,setCartOpen]= useState(false)
  const cart = cartStore((state) => state.cart);
  const totalCart = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  console.log(totalCart);

  return (
    <>
      <div className="w-full h-20 bg-[#f8f9fa] flex justify-between items-center sticky top-0 z-100">
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
            to="/catalog"
            className={({ isActive }) => {
              return isActive ? "text-[#1077A3]" : "text-black";
            }}
          >
            Catalog
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
        <div className="mr-5 md:mr-20 flex gap-5 relative">
          <LocalMallOutlinedIcon className="cursor-pointer" onClick={()=>setCartOpen(true)}/>
            <Cart cartOpen={cartOpen} cartClose={()=>setCartOpen(false)}/>
          {totalCart > 0 && (
            <span className="absolute bottom-4 right-10 md:bottom-3  md:-right-4 rounded-full md:w-full  text-center bg-black text-white">
              {totalCart}
            </span>
          )}

          {/* Hamburger */}
          <div onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
            {isOpen ? (
              <>
                <CloseOutlinedIcon />
              </>
            ) : (
              <MenuOutlinedIcon />
            )}
          </div>
        </div>
      </div>
      {/* Mobile View */}

      {isOpen && (
        <div className="bg-black/70 w-screen h-full fixed z-50">
          <div
            className={`bg-black w-[60vw] h-[100vh] fixed right-0 
    ${isOpen ? "top-20 opacity-100" : "-top-60 opacity-0"}
  `}
          >
            <div className="flex flex-col gap-2 ml-8 mt-5">
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive ? "text-[#1077A3]" : "text-white";
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/catalog"
                className={({ isActive }) => {
                  return isActive ? "text-[#1077A3]" : "text-white";
                }}
              >
                Catalog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "text-[#1077A3]" : "text-white";
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => {
                  return isActive ? "text-[#1077A3]" : "text-white";
                }}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

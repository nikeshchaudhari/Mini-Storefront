import React from "react";
import { NavLink } from "react-router-dom";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-[#f8f9fa] flex justify-between items-center">
        <div className="ml-5">
          <h1 className="text-[20px] lg:text-[30px] ">Mini Store</h1>
        </div>
        <div className="hidden md:flex gap-10  ">
          <NavLink>Home</NavLink>
          <NavLink>Shop</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact Us</NavLink>
        </div>
        <div className="mr-5 md:mr-20">
            <LocalMallOutlinedIcon/>

        </div>
      </div>
    </>
  );
};

export default Navbar;

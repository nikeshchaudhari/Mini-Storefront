import React from "react";
import cartStore from "../store/store";

const Cart = ({ cartOpen, cartClose }) => {
  const { cart, removeCart, updateCart, clearCart } = cartStore();

  return (
    <>
      <div  className={`fixed top-0 right-0 h-full w-full bg-black opacity-50 z-90 cursor-pointer ${
          cartOpen ? "block" : "hidden"
        } `}
        onClick={cartClose}>
          </div>
        {/* drawer */}
        <div
          className={`fixed top-50 right-0 w-full md:top-0 md:right-0 md:w-[40%] bg-white h-full z-100 ${
            cartOpen
              ? "translate-x-0  md:translate-x-0 transition duration-700"
              : "translate-y-full  md:translate-y-full transition duration-1000"
          }`}
        ></div>
      
    </>
  );
};

export default Cart;

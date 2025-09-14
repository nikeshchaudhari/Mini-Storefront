import React from "react";
import cartStore from "../store/store";
import CloseIcon from '@mui/icons-material/Close';
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
        >
        <div className="flex justify-between px-5 mt-5">
            <h1>Shopping Cart</h1>
            <CloseIcon className="cursor-pointer" onClick={()=>cartClose(true)}/>

        </div>
        <hr className="mt-5" />
       {cart.length === 0 ?(
        <p className=" flex items-center w-full h-full justify-center text-[20px]"> Cart is empty </p>
       ):(
        <div>
           {cart.map((item)=>(
          <div key={item.id} className="flex  mt-5">
           <div className="border w-20 h-20 flex justify-center p-2 mx-5">
             <img src={item.image} alt="" className="w-15"/>
           </div>
           <div className="w-[300px] " >
            <h1>{item.title}</h1>
           </div>
          </div>
        ))}
        </div>
       )}
        </div>
      
    </>
  );
};

export default Cart;

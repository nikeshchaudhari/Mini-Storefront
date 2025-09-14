import React from "react";
import cartStore from "../store/store";
import CloseIcon from "@mui/icons-material/Close";
const Cart = ({ cartOpen, cartClose }) => {
  const { cart, removeCart, updateCart, clearCart } = cartStore();

  const totalPrice = cart.reduce((sum, items) => 
   sum + items.price * items.quantity,0
  );
  // console.log(totalPrice);

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black opacity-50 z-90 cursor-pointer ${
          cartOpen ? "block" : "hidden"
        } `}
        onClick={cartClose}
      ></div>
      {/* drawer */}

      <div
        className={`fixed top-56 right-0 w-full md:top-0 md:right-0 md:w-[40%] bg-white h-full z-100 transform transition-transform duration-700 ${
          cartOpen
            ? "translate-x-0 "
            : "translate-y-full"
        }`}
      >
        <div className="h-[750px] md:h-[88vh] lg:h-[80vh]">
          <div className="flex justify-between px-5 mt-5">
            <h1>Shopping Cart</h1>
            <CloseIcon
              className="cursor-pointer"
              onClick={() => cartClose(true)}
            />
          </div>
          <hr className="mt-5" />
          {cart.length == 0 ? (
            <div className="flex justify-center items-center h-full md:text-[20px]">
              <p>No products in the cart.</p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex  mt-5">
                  <div className="border w-20 h-20 flex justify-center p-2 mx-5">
                    <img src={item.image} alt={item.title} className="w-15" />
                  </div>
                  <div className="w-[300px] ">
                    <h1>{item.title}</h1>
                    <p>
                      {item.quantity}*{item.price} = $
                      {item.quantity * item.price}
                    </p>
                  </div>
                  <div>
                    <CloseIcon
                      className="cursor-pointer"
                      onClick={() => removeCart(item.id)}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
       
        {cart.length === 0 ? (
          <></>
        ) : (
          <>
           <hr />
            <div className="flex justify-between px-5  items-center h-10">
              <h1>Total Price : </h1>
              <p>{totalPrice}</p>
            </div>
            <hr />
            <div className="flex justify-center w-full items-center h-20 ">
              <button className="w-[450px] bg-[#1077A3] p-2  rounded-4xl text-white transition hover:bg-[#08425a] hover:duration-700 cursor-pointer">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;

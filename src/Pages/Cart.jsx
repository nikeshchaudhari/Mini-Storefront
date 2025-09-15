import React from "react";
import cartStore from "../store/store";
import CloseIcon from "@mui/icons-material/Close";

const Cart = ({ cartOpen, cartClose }) => {
  const { cart, removeCart } = cartStore();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black opacity-50 z-90 cursor-pointer ${
          cartOpen ? "block" : "hidden"
        }`}
        onClick={cartClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-full md:w-[40%] bg-white h-full z-100 transform transition-transform duration-700 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between px-5 py-4 border-b">
          <h1 className="text-xl md:text-2xl font-bold">Shopping Cart</h1>
          <CloseIcon className="cursor-pointer" onClick={cartClose} />
        </div>

        {/* Product List */}
        <div className="flex-grow overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="flex justify-center items-center h-full text-lg">
              <p>No products in the cart.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <div className="border w-20 h-20 flex justify-center p-2">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                </div>
                <div className="flex-1 mx-4">
                  <h1 className="text-sm md:text-base">{item.title}</h1>
                  <p className="text-sm md:text-base">
                    {item.quantity} x ${item.price} = ${item.quantity * item.price}
                  </p>
                </div>
                <div>
                  <CloseIcon
                    className="cursor-pointer"
                    onClick={() => removeCart(item.id)}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout */}
        {cart.length !== 0 && (
          <div className="p-5 border-t">
            <div className="flex justify-between mb-3">
              <h2 className="font-semibold">Total Price:</h2>
              <p>${totalPrice}</p>
            </div>
            <button className="w-full bg-[#1077A3] p-2 rounded-3xl text-white hover:bg-[#08425a] transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

import axios from "axios";
import React, { useEffect, useState } from "react";
import cartStore from "../store/store";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "react-toastify";
import { Footer } from "./Footer";
const ProductDetails = () => {
  const { id } = useParams();
  console.log(id[0]);

  const [products, setProducts] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addCart = cartStore((state) => state.addCart);
  const cart = cartStore((state) => state.cart);

  console.log(cart);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Something error", err);
      }
    };
    dataFetch();
  }, [id]);
  if (!products) {
    return (
      <div className="flex justify-center h-screen items-center">
        <h1 className="text-[20px] animate-ping font-bold">Loading....</h1>
      </div>
    );
  }

  const handleIncrease = () => {
    setQuantity((p) => Math.min(p + 1, 10));
  };
  const handleDecrease = () => {
    setQuantity((sub) => Math.max(sub - 1, 1));
  };
  const handleAddCart = () => {
    const alreadyAdd = cart.find((f) => f.id === products.id);
    if (alreadyAdd) {
      toast.error("Already Add Products..");
    } else {
      toast.success("Add to cart");
      addCart({ ...products, quantity });
      console.log(quantity);
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen">

      
      <div className="md:flex md:mx-10 mt-10 overflow-hidden   ">
        <div className="md:shadow border border-black/5 rounded w-full md:w-[500px] flex justify-center p-2 ">
          <img
            src={products.image}
            alt=""
            className=" w-[200px] md:w-[300px] md:h-[400px]"
          />
        </div>
        <div className="mx-10 md:w-[500px]">
          <h1 className="md:text-[20px] text-[#1077A3] mb-3">
            {" "}
            {products.category}
          </h1>

          <h3 className="text-[23px] font-bold line-clamp-2 mb-3">
            {products.title}
          </h3>
          <p className="text-[25px] font-bold">Price : {products.price}</p>
          <p>{products.description}</p>
          <div className="flex justify-between   p-2 w-70 mt-2 cursor-pointer items-center">
            <div className="flex gap-5 justify-between items-center shadow p-2">
              <div
                className="hover:bg-black/5 p-1 rounded"
                onClick={handleDecrease}
              >
                <RemoveIcon />
              </div>
              <span>{quantity}</span>

              <div
                className={`hover:bg-black/5 p-1 rounded 
                  }`}
                onClick={handleIncrease}
              >
                <AddIcon />
              </div>
            </div>
            <div>
              <button
                className={` p-2 text-white cursor-pointer transition hover:duration-700 ${
                  products.rating.count === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-700 hover:bg-red-900"
                }`}
                disabled={products.rating.count === 0}
                onClick={handleAddCart}
              >
                <h4>Add to Cart</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetails;

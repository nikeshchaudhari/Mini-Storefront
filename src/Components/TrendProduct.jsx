import axios from "axios";
import React, { useEffect, useState } from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Navigate, useNavigate } from "react-router-dom";
import cartStore from "../store/store";
import { toast } from "react-toastify";

const TrendProduct = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cart = cartStore((state) => state.cart);
  const addCart = cartStore((state) => state.addCart);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setItems(res.data.slice(0, 4));
        setLoading(false);
        console.log(res.data.slice(0, 4));
      } catch (err) {
        console.log("Product Not", err);
        setLoading(true);
      }
    };
    dataFetch();
  }, []);

  const handleAddCart = (products) => {
    
    const alreadyAdd = cart.find((f) => f.id === products.id);
    if (alreadyAdd) {
      toast.error("Already Add Products..");
    } else {
      toast.success("Add to cart");
      addCart({ ...products, quantity: 1 });
    }
  };
  return (
    <div className="overflow-hidden">
      <>
        <h1 className=" text-center mt-10 text-[20px] md:text-[30px] font-bold">
          Trending Products
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 mt-10">
          {items.map((i) => (
            <div key={i.id} className=" bg-white shadow rounded p-2 ">
              <div
                className=" relative flex justify-center group"
                onClick={() => navigate(`/product-details/${i.id}`)}
              >
                <img
                  src={i.image}
                  alt={i.title}
                  className="w-[150px] md:w-[200px] h-[200px] md:h-[250px] sp-2 cursor-pointer transition transform hover:-translate-y-2  hover:duration-1000 "
                />
                <div
                  className="absolute text-center bottom-0 w-full  p-2 text-white bg-black hover:bg-[#1077A3] opacity-100 lg:opacity-0 lg:group-hover:opacity-80  hover:duration-1000 cursor-pointer flex justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddCart(i);
                  }}
                >
                  <h1>Addcard</h1>
                  <span>
                    <LocalMallOutlinedIcon />
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-5">
                <h3 className="line-clamp-1">{i.title}</h3>
                <p>Price : {i.price}</p>
                <p>Categoty : {i.category}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default TrendProduct;

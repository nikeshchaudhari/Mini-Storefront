import axios from "axios";
import React, { useEffect, useState } from "react";

const TrendProduct = () => {
  const [items, setItems] = useState([]);
  const [loading,setLoading]= useState(true)
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setItems(res.data.slice(0,4));
        setLoading(false)
        console.log(res.data.slice(0,4));
      } catch (err) {
        console.log("Product Not",err);
        setLoading(true)
        
      }
    };
    dataFetch();
  },[]);
  return (
    <div className="overflow-hidden">
      <>
        <h1 className=" text-center mt-5 text-[20px] md:text-[30px] font-bold">Trending Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
            {items.map((i)=>(
                <div key={i.id} className=" bg-white shadow rounded p-2 ">
                   
                   <div className="flex justify-center">
                     <img src={i.image} alt={i.title} className="w-[200px] p-2 cursor-pointer transition transform hover:-translate-y-2  hover:duration-700"/>
                   </div>
                   <div className="flex flex-col p-5">
                    <h3 className="line-clamp-1">{i.title}</h3>
                    <p>Price : {i.price}</p>
                    <p>Rating : {i.rating?.rate}</p>
                   </div>
                </div>
            ))}
        </div>
      </>
    </div>
  );
};

export default TrendProduct;

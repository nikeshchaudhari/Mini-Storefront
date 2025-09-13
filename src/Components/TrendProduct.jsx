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
        <h1 className=" text-center mt-5 text-[30px] font-bold">Trending Products</h1>
        <div className="flex justify-center gap-2">
            {items.map((i)=>(
                <div key={i.id} className="flex flex-col  items-center justify-center bg-white shadow-2xl w-[300px] ">
                   
                   <div className=" w-[300px] flex justify-center">
                     <img src={i.image} alt={i.title} className="w-[200px] p-2"/>
                   </div>
                   <div className="flex flex-col w-50">
                    <h3>{i.title}</h3>
                    <p>Price : <span>{i.price}</span></p>
                    <p>{i.price}</p>
                   </div>
                </div>
            ))}
        </div>
      </>
    </div>
  );
};

export default TrendProduct;

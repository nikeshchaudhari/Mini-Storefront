import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowPage, setRowPage] = useState(12);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=0"
        );
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.log("something wrong...");
        setLoading(true);
      }
    };
    dataFetch();
  }, []);
  //   paginataion
  const indexOfLastItem = currentPage * rowPage;
  const indexOfFirstItem = indexOfLastItem - rowPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / rowPage);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center mt-5 text-[30px] font-bold italic">
          Product
        </h1>
        <div className="flex mt-10 mr-5">
          <div>
            <Sidebar />
          </div>

          {loading ? (
            <div className="w-full flex justify-center items-center bg-gray-500/5 h-screen">
              <p className="animate-ping   text-[20px]">Loading..</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 ml-5 ">
                {currentItems.map((items) => (
                  <div
                    key={items.id}
                    className=" bg-white shadow p-2 mx-2 my-2"
                  >
                    <div
                      className=" p-2"
                      onClick={() => navigate(`/product-details/${items.id}`)}
                    >
                      <img
                        src={items.image}
                        alt={items.title}
                        className="w-[200px] h-[200px] cursor-pointer transition transform hover:-translate-y-2  hover:duration-1000 "
                      />
                    </div>
                    <div>
                      <h3 className="line-clamp-1">{items.title}</h3>
                      <p>Price : {items.price}</p>
                      <p>Rating : {items.rating?.rate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="flex justify-end mx-12 mb-5 gap-5 items-center">
          <button className="bg-[#1077A3] p-1 w-15 text-white disabled:opacity-50 cursor-pointer"  disabled={currentPage===1} onClick={()=> setCurrentPage((prev)=>Math.max(prev-1,1))}>
            Prev
            </button>{" "}
            <span> {currentPage}.... {totalPages}</span>
            <button  className="bg-[#1077A3] p-1 w-15 text-white disabled:opacity-50 cursor-pointer" disabled={currentPage===totalPages} onClick={()=>setCurrentPage((next)=>Math.min(next+1,totalPages))}>
                Next
            </button>
        </div>
      </div>
    </>
  );
};

export default Catalog;

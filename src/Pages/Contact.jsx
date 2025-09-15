import React from "react";
import Navbar from "../Components/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
    
    <Helmet>
    <title> Contact-Us |  Mini Store
    </title>
    <meta name="description" content="Mini store are selling product for affordable price" />
    <meta name="keywords" content="ecommerce, ministore,shoping,buy,sell, bestproducts" />
   </Helmet>
      <Navbar />
      <div>
         <h1 className="text-center text-[20px] md:text-[30px] font-bold mt-5 italic">Contact Us</h1>
      </div>
      <div className="w-full mt-30 overflow-x-auto">
       
        <div className="md:flex justify-between mx-5 md:mx-auto max-w-[1200px] items-start gap-10">
    
          <div className="flex-1">
            <h1 className="text-[30px] font-bold mb-5">Send us Message</h1>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-center w-full max-w-[250px]">
                <FaPhoneAlt className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Phone</p>
                  <p className="text-[20px]">98xxxxxxx</p>
                </div>
              </div>

              <div className="flex gap-3 items-center w-full max-w-[250px]">
                <MdEmail className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Email</p>
                  <p className="text-[20px]">info.ministore.com</p>
                </div>
              </div>

              <div className="flex gap-3 items-center w-full max-w-[250px]">
                <FaLocationDot className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Location</p>
                  <p className="text-[20px]">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 mt-10 md:mt-0">
            <form className="flex flex-col gap-3 max-w-[400px] w-full">
              <label>Name*</label>
              <input type="text" className="border p-2 w-full" />
              <label>Email*</label>
              <input type="text" className="border p-2 w-full" />
              <label>Phone*</label>
              <input type="text" className="border p-2 w-full" />
              <label>Message</label>
              <textarea className="border p-2 w-full"></textarea>
              <button className="bg-blue-600 text-white p-2 mt-2 rounded">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44079.75310313172!2d85.28493274660778!3d27.709030242219633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e1!3m2!1sen!2snp!4v1757934539110!5m2!1sen!2snp"
            className="w-full h-[450px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;

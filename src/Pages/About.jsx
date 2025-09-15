import React from "react";
import Navbar from "../Components/Navbar";
import Typewriter from 'typewriter-effect';
import { Footer } from "./Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
    <Helmet>
    <title> About-Us |  Mini Store
    </title>
    <meta name="description" content="Mini store are selling product for affordable price" />
    <meta name="keywords" content="ecommerce, ministore,shoping,buy,sell, bestproducts" />
   </Helmet>

      <Navbar />
      <div className="overflow-hidden min-h-screen">
        <h1 className="text-center mt-5 text-[20px] md:text-[30px] italic font-bold">
          About Us
        </h1>
        <div className="md:flex justify-center mt-10 ">
          <div className="w-full md:w-[40vw] h-[400px] md:mx-5 shadow-2xl flex justify-center items-center p-2 mb-10">
            <h1 className="text-[40px] font-semibold ">
                <Typewriter
              options={{
                strings: ["Mini Store"],
                autoStart: true,
                loop: true,
              }}
            />
            </h1>
            
          </div>
          <div className="md:w-[40vw] mx-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            nesciunt sed ipsa pariatur molestiae, deserunt harum, quibusdam
            beatae quisquam fuga repudiandae, expedita iure obcaecati maxime a
            eum unde quaerat sapiente inventore doloremque laborum? Itaque, modi
            facere dolorem facilis eos cum rerum tempora officiis nisi beatae
            placeat harum exercitationem asperiores molestiae perferendis quod
            quidem, temporibus dolores nostrum, nam possimus. Tenetur ullam
            exercitationem, architecto quas et deserunt nulla similique,
            repudiandae laudantium explicabo nesciunt adipisci
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;

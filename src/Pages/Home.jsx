import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import TrendProduct from '../Components/TrendProduct'
import Cart from './Cart'
import { Footer } from './Footer'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
   <>
   <Helmet>
    <title> Home | Mini Store
    </title>
    <meta name="description" content="Mini store are selling product for affordable price" />
    <meta name="keywords" content="ecommerce, ministore,shoping,buy,sell, bestproducts" />
   </Helmet>
   <Navbar/>
   <Slider/>
   <TrendProduct/>
   <Cart/>
   <Footer/>
   </>
  )
}

export default Home
import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import TrendProduct from '../Components/TrendProduct'
import Cart from './Cart'
import { Footer } from './Footer'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Slider/>
   <TrendProduct/>
   <Cart/>
   <Footer/>
   </>
  )
}

export default Home
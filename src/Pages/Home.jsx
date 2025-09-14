import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import TrendProduct from '../Components/TrendProduct'
import Cart from './Cart'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Slider/>
   <TrendProduct/>
   <Cart/>
   </>
  )
}

export default Home
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const Cart = ({children})=>{
  const[items,setItems]= useState([])

  useEffect(()=>{
    const store = localStorage.getItem("cart")
    if(store){
      setItems(JSON.parse(items))
    }

  },[])

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(items))
  },[items])

}


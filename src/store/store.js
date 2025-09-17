import React from "react";
import { create } from "zustand";
const localStore = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
};
const cartStore = create((set) => ({
  cart: localStore(),
  addCart: (item,qty  ) => {
    set((state) => {
      const alreadyAdd = state.cart.find((p) => p.id === item.id);
      let newCart;
      if (alreadyAdd) {
        newCart = state.cart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + qty } : p
        );
      } else {
        newCart = [...state.cart, item];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },

  removeCart: (id) => {
    set((state) => {
      const newCart = state.cart.filter((p) => p.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },

}));

export default cartStore;

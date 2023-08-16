import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useContext, useEffect } from "react";

const cartContext = createContext({} as any);

export default function CartProvider({ children }: any) {
  const [cart, setCart] = useState({
    ticket: { slotId: "", ticket: [] },
    product: [],
  });
  const [payment, setPayment] = useState([]);

  function add(item: any, type: string) {
    let newCart = cart;
    if (type === "product") {
      newCart = { ticket: cart.ticket, product: item };
    }
    if (type === "ticket") {
      newCart = { ticket: item, product: cart.product };
    }
    setCart(newCart);
    AsyncStorage.setItem("cart", JSON.stringify(newCart));
  }

  const store = {
    add,
    cart,
    setCart,
    payment,
    setPayment,
  };
  useEffect(() => {}, [cart]);

  return <cartContext.Provider value={store}>{children}</cartContext.Provider>;
}

export function useCart() {
  const context = useContext(cartContext);
  const { cart, add, setCart, payment, setPayment } = context;

  return {
    cart,
    add,
    setCart,
    payment,
    setPayment,
  };
}

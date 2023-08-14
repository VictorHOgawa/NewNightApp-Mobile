import "react-native-gesture-handler";
import CartProvider from "./src/context/cart";
import { useEffect } from "react";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import { Routes } from "./src/routes";

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await requestTrackingPermissionsAsync();
      if (status === "granted") {
      }
    })();
  }, []);
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import { useEffect } from "react";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import CartProvider from "./src/context/cart";
import { Routes } from "./src/routes";

LogBox.ignoreAllLogs(); //Ignore all log notifications
console.error = () => {};
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

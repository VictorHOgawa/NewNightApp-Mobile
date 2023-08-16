import "react-native-gesture-handler";
import CartProvider from "./src/context/cart";
import { useEffect } from "react";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import { Routes } from "./src/routes";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
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

import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Header } from "../../Components/Global/Header";
import { LineBreak } from "../../Components/Global/LineBreak";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { IndividualMethod } from "../../Components/Pages/Checkout/IndividualMethod";
import { Method } from "../../Components/Pages/Checkout/Method";
import { Title } from "../../Components/Pages/Checkout/Title";
import { Total } from "../../Components/Pages/Checkout/Total";
import { AuthPostAPI, loginVerifyAPI } from "../../utils/api";
import { Container, Safe } from "./styles";
import { useCart } from "../../context/cart";

export function Checkout() {
  const { cart } = useCart();
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState("Pix");
  const [loading, setLoading] = useState(true);
  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify !== 200) {
      Alert.alert("Realize o Login antes de Prosseguir");
      return navigation.navigate("Login", { page: "Checkout" });
    }
    return;
  }

  async function handleCart() {
    const connect = await AuthPostAPI("/purchase/cart", {
      ...cart,
      coupon: "",
    });
    setLoading(false);
  }

  useEffect(() => {
    handleVerify();
  }, []);

  useEffect(() => {
    handleCart();
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Header />
          <Title />
          <LineBreak />
          <Method selected={selected} setSelected={setSelected} />
          <IndividualMethod selected={selected} />
          <LineBreak />
          <Total selected={selected} />
          <Safe source={require("../../../assets/Checkout/Safe.png")} />
        </>
      )}
    </Container>
  );
}

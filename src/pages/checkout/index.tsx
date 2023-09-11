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
import { useCart } from "../../context/cart";
import { AuthPostAPI, loginVerifyAPI } from "../../utils/api";
import { Container, Safe } from "./styles";

export function Checkout() {
  const { cart } = useCart();
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState("Pix");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState<any>();
  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify !== 200) {
      Alert.alert("Realize o Login antes de Prosseguir");
      return navigation.navigate("Login", { page: "Checkout" });
    }
  }

  async function handleCart() {
    if (cart.ticket.ticket.length === 0 && cart.product.length === 0) {
      Alert.alert("Selecione um (ou mais) Produto(s)");
      return navigation.goBack();
    }
    const connect = await AuthPostAPI("/purchase/cart", {
      ...cart,
      coupon: "",
    });
    if (connect.status !== 200) {
      Alert.alert(connect.body);
      return navigation.goBack();
    }
    setTotal(connect.body);
    return setLoading(false);
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

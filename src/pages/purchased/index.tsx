import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Ad } from "../../Components/Global/Ad";
import { LoginValidation } from "../../Components/Global/Login";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { loginVerifyAPI } from "../../utils/api";
import { Btn, Container, Img, Logo } from "./styles";
import { useCart } from "../../context/cart";

export function Purchased() {
  const navigation = useNavigation<any>();

  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useCart();

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      setCart({ ticket: { slotId: "", ticket: [] }, product: [] });
      setLogged(true);
    }
    return setLoading(false);
  }

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <Logo source={require("../../../assets/Global/Logo2.png")} />
          {logged ? (
            <>
              <LoadingOut />
              <Ad />
              <HorizontalView
                style={{
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Btn onPress={() => navigation.navigate("Tickets")}>
                  <Img
                    source={require("../../../assets/Purchased/Tickets.png")}
                  />
                </Btn>
                <Btn onPress={() => navigation.navigate("Products")}>
                  <Img
                    source={require("../../../assets/Purchased/Products.png")}
                  />
                </Btn>
                <Btn onPress={() => navigation.navigate("Suggestions")}>
                  <Img
                    source={require("../../../assets/Purchased/Suggestions.png")}
                  />
                </Btn>
                <Btn onPress={() => navigation.navigate("VIP")}>
                  <Img source={require("../../../assets/Purchased/VIP.png")} />
                </Btn>
              </HorizontalView>
            </>
          ) : (
            <LoginValidation />
          )}
        </>
      )}
    </Container>
  );
}

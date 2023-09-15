import { Image } from "react-native";
import { Ad } from "../../Components/Global/Ad";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { Container, Logo } from "./styles";

export function Shop() {
  return (
    <Container>
      {/* <LoadingFull />
      <Logo source={require("../../../assets/Global/Logo2.png")} />
      <Ad /> */}
      <Image
        source={require("../../../assets/NightShop.png")}
        style={{ width: "100%", height: "100%" }}
      />
    </Container>
  );
}

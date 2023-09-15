import { Container } from "./styles";
import { Image } from "react-native";

export function VIP() {
  return (
    <Container>
      <Image
        source={require("../../../assets/NightShop.png")}
        style={{ width: "100%", height: "100%" }}
      />
    </Container>
  );
}

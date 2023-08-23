import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { Container, Logo } from "./styles";

export function Shop() {
  return (
    <Container>
      <Logo source={require("../../../assets/Global/Logo2.png")} />
      <Ad />
    </Container>
  );
}

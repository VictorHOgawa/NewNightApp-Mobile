import { Ad } from "../../Components/Global/Ad";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { Container, Logo } from "./styles";

export function Shop() {
  return (
    <Container>
      <LoadingFull />
      <Logo source={require("../../../assets/Global/Logo2.png")} />
      <Ad />
    </Container>
  );
}

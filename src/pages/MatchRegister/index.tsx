import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { Learn } from "../../Components/Pages/MatchRegister/Learn";
import { Register } from "../../Components/Pages/MatchRegister/Register";
import { Background, Container } from "./styles";

export function MatchRegister() {
  return (
    <Container>
      <LoadingFull />
      <Background source={require("../../../assets/Match/Background.png")} />
      <Register />
      <Learn />
    </Container>
  );
}

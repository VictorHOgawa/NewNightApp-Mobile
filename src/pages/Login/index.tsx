import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { BackButton } from "../../Components/Global/Back";
import { Header } from "../../Components/Global/Header";
import { Form } from "../../Components/Pages/Login";
import { Container, Logo } from "./styles";

export function Login() {
  return (
    <Container>
      <BackButton style={{ marginTop: getStatusBarHeight() + 20 }} />
      <Logo source={require("../../../assets/Global/Logo2.png")} />
      <Form />
    </Container>
  );
}

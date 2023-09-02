import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { BackButton } from "../../Components/Global/Back";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { Form } from "../../Components/Pages/Login";
import { Container, Logo } from "./styles";

export function Login() {
  return (
    <Container>
      <LoadingFull />
      <BackButton style={{ marginTop: getStatusBarHeight() + 20 }} />
      <Logo source={require("../../../assets/Global/Logo2.png")} />
      <Form />
    </Container>
  );
}

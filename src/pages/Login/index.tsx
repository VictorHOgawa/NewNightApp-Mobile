import { Header } from "../../Components/Global/Header";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { Form } from "../../Components/Pages/Login";
import { Container } from "./styles";

export function Login() {
  return (
    <Container>
      <LoadingFull />
      <Header />
      <Form />
    </Container>
  );
}

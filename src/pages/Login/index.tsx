import { Header } from "../../Components/Global/Header";
import { Form } from "../../Components/Pages/Login";
import { Container } from "./styles";

export function Login() {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
}

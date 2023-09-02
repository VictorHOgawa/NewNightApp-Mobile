import { Header } from "../../Components/Global/Header";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { Form } from "../../Components/Pages/Register";
import { Container } from "./styles";

export function Register() {
  return (
    <Container>
      <LoadingFull />
      <Header />
      <Form />
    </Container>
  );
}

import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { ProductCards } from "../../Components/Pages/Products";
import { Container } from "./styles";

export function Products() {
  return (
    <Container>
      <Header />
      <Ad />
      <ProductCards />
    </Container>
  );
}

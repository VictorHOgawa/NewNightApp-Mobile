import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { ProductCards } from "../../Components/Pages/Products";
import { Container } from "./styles";

export function Products() {
  return (
    <Container>
      <LoadingFull />
      <Header />
      <Ad />
      <ProductCards />
    </Container>
  );
}

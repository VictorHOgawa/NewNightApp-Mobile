import { useState } from "react";
import { Header } from "../../Components/Global/Header";
import { IndividualMethod } from "../../Components/Pages/Checkout/IndividualMethod";
import { Method } from "../../Components/Pages/Checkout/Method";
import { Title } from "../../Components/Pages/Checkout/Title";
import { Container } from "./styles";

export function Checkout() {
  const [selected, setSelected] = useState("Pix");

  return (
    <Container>
      <Header />
      <Title />
      <Method selected={selected} setSelected={setSelected} />
      <IndividualMethod selected={selected} />
    </Container>
  );
}

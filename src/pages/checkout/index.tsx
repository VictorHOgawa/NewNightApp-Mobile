import { useState } from "react";
import { Header } from "../../Components/Global/Header";
import { IndividualMethod } from "../../Components/Pages/Checkout/IndividualMethod";
import { Method } from "../../Components/Pages/Checkout/Method";
import { Title } from "../../Components/Pages/Checkout/Title";
import { Container, Safe } from "./styles";
import { Total } from "../../Components/Pages/Checkout/Total";
import { LineBreak } from "../../Components/Global/LineBreak";

export function Checkout() {
  const [selected, setSelected] = useState("Pix");

  return (
    <Container>
      <Header />
      <Title />
      <LineBreak />
      <Method selected={selected} setSelected={setSelected} />
      <IndividualMethod selected={selected} />
      <LineBreak />
      <Total />
      <Safe source={require("../../../assets/Checkout/Safe.png")} />
    </Container>
  );
}

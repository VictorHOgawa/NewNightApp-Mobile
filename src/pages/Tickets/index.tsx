import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { More } from "../../Components/Global/More";
import { TicketCards } from "../../Components/Pages/Tickets";
import { Container } from "./styles";

export function Tickets() {
  return (
    <Container>
      <Header />
      <Ad />
      <TicketCards />
    </Container>
  );
}

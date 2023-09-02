import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { TicketCards } from "../../Components/Pages/Tickets";
import { Container } from "./styles";

export function Tickets() {
  return (
    <Container>
      <LoadingFull />
      <Header />
      <Ad />
      <TicketCards />
    </Container>
  );
}

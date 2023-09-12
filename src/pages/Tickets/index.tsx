import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { TicketCards } from "../../Components/Pages/Tickets";
import { authGetAPI } from "../../utils/api";
import { Container } from "./styles";
import { useState, useEffect } from "react";

export function Tickets() {
  const [tickets, setTickets] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  async function getTickets() {
    setLoading(true);
    const connect = await authGetAPI("/user/ticket");
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    setTickets(connect.body.tickets);
    return setLoading(false);
  }

  useEffect(() => {
    getTickets();
  }, []);
  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Header />
          <Ad />
          <TicketCards tickets={tickets} reload={getTickets} />
        </>
      )}
    </Container>
  );
}

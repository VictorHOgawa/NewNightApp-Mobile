import { useRoute } from "@react-navigation/native";
import { Header } from "../../Components/Global/Header";
import { getAPI } from "../../utils/api";
import { Container } from "./styles";
import { useState, useEffect } from "react";

export function Event() {
  const [event, setEvent] = useState();
  const { id } = useRoute().params as any;

  async function Info() {
    const connect = await getAPI(`/event/${id}`);
    console.log("connect:", connect);
  }

  useEffect(() => {
    Info();
  }, []);
  return (
    <Container>
      <Header />
    </Container>
  );
}

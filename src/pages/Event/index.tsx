import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Global/Header";
import { GlobalTitle } from "../../Components/Global/Title";
import { Buttons } from "../../Components/Pages/Event/Buttons";
import { Description } from "../../Components/Pages/Event/Description";
import { Individual } from "../../Components/Pages/Event/Individual";
import { getAPI } from "../../utils/api";
import { Banner, Container, Image } from "./styles";

export function Event() {
  const [eventDetails, setEventDetails] = useState<any>();
  const { id } = useRoute().params as any;

  async function getEventInfo() {
    const connect = await getAPI(`/event/${id}`);
    if (connect.status === 200) {
      setEventDetails(connect.body);
    }
  }

  useEffect(() => {
    getEventInfo();
  }, []);

  return (
    <Container>
      <Header />
      <Image source={{ uri: eventDetails?.photo_location }} />
      <GlobalTitle title={eventDetails?.name} />
      <Buttons />
      <Individual
        date={eventDetails?.date}
        local={eventDetails?.local}
        city={eventDetails?.city.name}
        state={eventDetails?.city.state}
      />
      <Banner />
      <Description description={eventDetails?.description[0]} />
    </Container>
  );
}

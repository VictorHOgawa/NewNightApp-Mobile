import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { GlobalTitle } from "../../Components/Global/Title";
import { EventLoading } from "../../Components/Loading/Home/EventLoading";
import { EventCard } from "../../Components/Pages/Home/Events";
import { getAPI } from "../../utils/api";
import { Container, EventList, Map } from "./styles";
import { PlaceCard } from "../../Components/Pages/Home/Places";
import { RFValue } from "react-native-responsive-fontsize";

export function Home() {
  const places = [1, 2, 3, 4, 5, 6];
  const navigation = useNavigation<any>();

  const [event, setEvent] = useState<any>([]);
  const [eventLoading, setEventLoading] = useState(true);
  const [place, setPlace] = useState<any>([]);

  async function getEvents() {
    const [event, place] = await Promise.all([
      getAPI("/event"),
      getAPI("/place"),
    ]);
    if (event.status === 200) {
      setEvent(event.body.events);
      return setEventLoading(false);
    }
    if (place.status === 200) {
      setPlace(place.body.places);
      return setEventLoading(false);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Container
      contentContainerStyle={{ flexGrow: 1, paddingBottom: RFValue(80) }}
    >
      <Header page="main" />
      <Ad />
      <GlobalTitle title="Eventos e Festas" />
      <EventLoading loading={eventLoading}>
        <>
          {event.length === 0 ? (
            <></>
          ) : (
            <View>
              <EventList
                horizontal
                data={event}
                keyExtractor={(item: any) => item._id}
                renderItem={({ item }: any) => (
                  <EventCard
                    photo_location={item.photo_location}
                    name={item.name}
                    local={item.local}
                    date={item.date}
                    city={item.city.name}
                    state={item.city.state}
                    onPress={() =>
                      navigation.navigate("Event", { id: item.id })
                    }
                  />
                )}
              />
            </View>
          )}
        </>
      </EventLoading>
      <GlobalTitle title="Lugares para Curtir" />
      <EventLoading loading={eventLoading}>
        <>
          {event.length === 0 ? (
            <></>
          ) : (
            <View>
              <EventList
                horizontal
                data={event}
                keyExtractor={(item: any) => item._id}
                renderItem={({ item }: any) => (
                  <PlaceCard
                    photo_location={item.photo_location}
                    name={item.name}
                    place={item.local}
                    current={item.sell}
                    city={item.city.name}
                    state={item.city.state}
                    id={item._id}
                    onPress={() =>
                      navigation.navigate("Place", { id: item.id })
                    }
                  />
                )}
              />
            </View>
          )}
        </>
      </EventLoading>
    </Container>
  );
}

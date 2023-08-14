import { Text, View } from "react-native";
import { Header } from "../../Components/Global/Header";
import { Container, EventList } from "./styles";
import { Ad } from "../../Components/Global/Ad";
import { GlobalTitle } from "../../Components/Global/Title";
import { EventLoading } from "../../Components/Loading/Home/EventLoading";
import { EventCard } from "../../Components/Pages/Home/Events";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAPI } from "../../utils/api";
import { PlaceCard } from "../../Components/Pages/Home/Places";

export function Home() {
  const navigation = useNavigation<any>();

  const [event, setEvent] = useState<any>([]);
  const [eventLoading, setEventLoading] = useState(true);
  const [restaurant, setRestaurant] = useState<any>([1, 2, 3]);

  async function getEvents() {
    const connect = await getAPI("/event");
    if (connect.status === 200) {
      setEvent(connect.body.events);
      return setEventLoading(false);
    }
  }

  console.log("event:", event);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Container>
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
      {/* <GlobalTitle title="Lugares para Curtir" />
      <EventLoading loading={eventLoading}>
        <>
          {restaurant.length === 0 ? (
            <></>
          ) : (
            <View>
              <EventList
                horizontal
                data={restaurant}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                  <PlaceCard
                    // location={item.location}
                    // name={item.name}
                    // place={item.place}
                    // current={item.current}
                    // id={item.id}
                    onPress={() =>
                      navigation.navigate("Restaurant", { id: item._id })
                    }
                  />
                )}
              />
            </View>
          )}
        </>
      </EventLoading> */}
    </Container>
  );
}

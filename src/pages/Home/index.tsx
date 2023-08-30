import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { GlobalTitle } from "../../Components/Global/Title";
import { EventLoading } from "../../Components/Loading/Home/EventLoading";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { EventCard } from "../../Components/Pages/Home/Events";
import { PlaceCard } from "../../Components/Pages/Home/Places";
import { getAPI } from "../../utils/api";
import { Container, EventList } from "./styles";

export function Home() {
  const navigation = useNavigation<any>();

  const [event, setEvent] = useState<any>([]);
  const [eventLoading, setEventLoading] = useState(true);
  const [placesLoading, setPlacesLoading] = useState(true);
  const [places, setPlaces] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  async function getEvents() {
    const connect = await getAPI("/event");
    if (connect.status === 200) {
      setEvent(connect.body.events);
      return setEventLoading(false);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  async function getPlaces() {
    const connect = await getAPI("/places");
    if (connect.status === 200) {
      setPlaces(connect.body.places);
      return setPlacesLoading(false);
    }
  }

  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <Container
      contentContainerStyle={{ flexGrow: 1, paddingBottom: RFValue(80) }}
    >
      {eventLoading || placesLoading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
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
                    data={places}
                    keyExtractor={(item: any) => item._id}
                    renderItem={({ item }: any) => (
                      <PlaceCard
                        photo={item.photo[0].photo_location}
                        name={item.name}
                        city={item.city}
                        id={item._id}
                        openTime={item.openTime}
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
        </>
      )}
    </Container>
  );
}

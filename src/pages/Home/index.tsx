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
import { Container, EventList, HeaderBar, Text } from "./styles";
import { LineBreak } from "../../Components/Global/LineBreak";

export function Home() {
  const navigation = useNavigation<any>();
  const [events, setEvents] = useState<any>([]);
  const [places, setPlaces] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState({
    name: "Qualquer Lugar",
    id: "",
    state: "",
    created_at: "",
  });

  async function getEverything() {
    setLoading(true);
    const [events, places] = await Promise.all([
      getAPI("/event?city_id=" + selectedCity.id),
      getAPI("/places?city_id=" + selectedCity.id),
    ]);
    if (events.status === 200 && places.status === 200) {
      setEvents(events.body.events);
      setPlaces(places.body.places);
      return setLoading(false);
    }
  }

  useEffect(() => {
    getEverything();
  }, [selectedCity]);

  return (
    <>
      <HeaderBar />

      <Container
        contentContainerStyle={{ flexGrow: 1, paddingBottom: RFValue(80) }}
      >
        {loading ? (
          <LoadingIn />
        ) : (
          <>
            <LoadingOut />
            <Header
              page="main"
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
            <Ad />
            <GlobalTitle title="Eventos e Festas" />
            <EventLoading loading={loading}>
              <>
                {events.length === 0 ? (
                  <Text>Nenhum Evento Encontrado</Text>
                ) : (
                  <View>
                    <EventList
                      horizontal
                      data={events}
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
            <LineBreak />
            <GlobalTitle title="Lugares para Curtir" />
            <EventLoading loading={loading}>
              <>
                {places.length === 0 ? (
                  <Text>Nenhum Lugar Encontrado</Text>
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
                          address={item.address}
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
    </>
  );
}

import { useNavigation, useRoute } from "@react-navigation/native";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Ad } from "../../Components/Global/Ad";
import { Button } from "../../Components/Global/Button";
import { Header } from "../../Components/Global/Header";
import { LineBreak } from "../../Components/Global/LineBreak";
import { GlobalTitle } from "../../Components/Global/Title";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { Buttons } from "../../Components/Pages/Place/Buttons";
import { Description } from "../../Components/Pages/Place/Description";
import { Individual } from "../../Components/Pages/Place/Individual";
import { Video } from "../../Components/Pages/Place/Video";
import Theme from "../../styles/themes";
import { getAPI } from "../../utils/api";
import { Banner } from "../Event/styles";
import { ButtonGroup, Container, Icon, Image, Map } from "./styles";

export function Place() {
  const navigation = useNavigation<any>();
  const { id } = useRoute().params as any;
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState<any>();
  async function getPlaceDetails() {
    const connect = await getAPI(`/places/${id}`);
    if (connect.status === 200) {
      setPlace(connect.body.place);
      return setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getPlaceDetails();
    }
  }, [id]);

  console.log("place", place);
  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Header />
          <Ad />
          <View style={{ width: "100%" }}>
            <Map
              horizontal
              data={[1, 2, 3]}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <Image source={{ uri: place.photo[0].photo_location }} />
              )}
            />
          </View>
          <GlobalTitle title={place?.name} />
          <Buttons
            Geo={place?.googleLink}
            Insta={place?.instagram}
            Whats={place?.whatsapp}
          />
          <Individual
            openTime={place?.openTime}
            date={new Date()}
            address={place?.address}
            city={place?.city}
          />

          <HorizontalView
            style={{
              alignSelf: "center",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Button
              title="Voltar"
              background={`${Theme.color.secondary_60}`}
              color={`${Theme.color.gray_10}`}
              width={125}
              height={40}
              fontSize={18}
            />
            <Button
              title={"Finalizar"}
              background={`${Theme.color.confirmation}`}
              color={`${Theme.color.gray_10}`}
              width={125}
              height={40}
              fontSize={18}
            />
          </HorizontalView>
          <Banner />

          <GlobalTitle title="Sobre o Bar" />
          <Button
            title="Cardápio"
            background={`${Theme.color.next}`}
            color={`${Theme.color.gray_10}`}
            width={300}
            height={80}
            fontSize={25}
          />
          <Description description={place?.description[0]} />
          <Video video="https://www.youtube.com/watch?v=SAMpvaC4xR0" />
          <ButtonGroup>
            <Button
              background={`${Theme.color.confirmation}`}
              color={`${Theme.color.background}`}
              title=" Escolher Meus Ingressos"
              width={200}
              height={30}
              fontSize={12}
            >
              <Icon
                source={require("../../../assets/Global/Icons/ticketIcon.png")}
              />
            </Button>
            <Button
              background={`${Theme.color.primary_80}`}
              title=""
              width={50}
              height={30}
            >
              <Icon
                source={require("../../../assets/Global/Icons/sendIcon.png")}
              />
            </Button>
          </ButtonGroup>
          <LineBreak />
          {place?.description.length === 1 ? (
            <></>
          ) : (
            place?.description
              .slice(1)
              .map((item: { name: string; description: string }) => (
                <>
                  <Description description={item} />
                  <LineBreak />
                </>
              ))
          )}
        </>
      )}
    </Container>
  );
}

import moment from "moment";
import "moment/locale/pt-br";
import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { GlobalTitle } from "../../Components/Global/Title";
import { Buttons } from "../../Components/Pages/Place/Buttons";
import { Individual } from "../../Components/Pages/Place/Individual";
import { ButtonGroup, Container, Icon, Image, Map } from "./styles";
import { useEffect, useState } from "react";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { Button } from "../../Components/Global/Button";
import Theme from "../../styles/themes";
import { Banner } from "../Event/styles";
import { Description } from "../../Components/Pages/Place/Description";
import { Video } from "../../Components/Pages/Place/Video";
import { LineBreak } from "../../Components/Global/LineBreak";
import { getAPI } from "../../utils/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export function Place() {
  const navigation = useNavigation<any>();
  const { id } = useRoute().params as any;
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState<any>();
  console.log("place: ", place);
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
  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
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
          <Buttons />
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

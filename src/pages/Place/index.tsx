import { useNavigation, useRoute } from "@react-navigation/native";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";
import { Alert, Linking, Share, View } from "react-native";
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
import {
  ButtonGroup,
  Container,
  Icon,
  Image,
  Map,
  ModalBody,
  Text,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import Modal from "react-native-modal";
import { BackButton } from "../../Components/Global/Back";

export function Place() {
  const navigation = useNavigation<any>();
  const { id } = useRoute().params as any;
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState<any>();
  const [openMenu, setOpenMenu] = useState(false);
  async function getPlaceDetails() {
    const connect = await getAPI(`/places/${id}`);
    if (connect.status === 200) {
      setPlace(connect.body.place);
      return setLoading(false);
    }
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    if (id) {
      getPlaceDetails();
    }
  }, [id]);

  const handlePress = (link: string) => {
    Linking.openURL(link);
  };

  const handleMenu = () => {
    if (place?.menu_photo) {
      return setOpenMenu(true);
    }
    return handlePress(place?.menu);
  };

  return (
    <Container
      contentContainerStyle={{ flexGrow: 1, paddingBottom: RFValue(80) }}
    >
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Header />
          <Ad />
          <View>
            <Map
              horizontal
              data={place.photo}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <Image source={{ uri: item.photo_location }} />
              )}
            />
          </View>
          <GlobalTitle title={place?.name} />
          <Buttons
            Geo={place?.location}
            Insta={place?.instagram}
            Whats={place?.whatsapp}
          />
          <Individual place={place} />

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
            onPress={handleMenu}
          />
          <Modal
            isVisible={openMenu}
            onBackButtonPress={() => setOpenMenu(false)}
            onBackdropPress={() => setOpenMenu(false)}
            onModalHide={() => setOpenMenu(false)}
          >
            <ModalBody style={{ padding: 10, borderRadius: 10 }}>
              <Image
                source={{ uri: place?.menu }}
                style={{ width: "100%", height: "90%" }}
              />
              <Button
                title="Voltar"
                background={Theme.color.confirmation}
                color={Theme.color.background}
                width={250}
                height={40}
                onPress={() => setOpenMenu(false)}
              />
            </ModalBody>
          </Modal>
          {place?.description.length === 0 ? (
            <></>
          ) : (
            <>
              <Description description={place?.description[0]} />
            </>
          )}
          <Video video="https://www.youtube.com/watch?v=SAMpvaC4xR0" />
          <Button
            background={`${Theme.color.primary_80}`}
            title=""
            width={50}
            height={30}
            onPress={onShare}
          >
            <Icon
              source={require("../../../assets/Global/Icons/sendIcon.png")}
            />
          </Button>
          <LineBreak />
          {place?.description.length === 0 ? (
            <></>
          ) : (
            <>
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
        </>
      )}
    </Container>
  );
}

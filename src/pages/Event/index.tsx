import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Alert, Share, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../Components/Global/Button";
import { Header } from "../../Components/Global/Header";
import { LineBreak } from "../../Components/Global/LineBreak";
import { Tabs } from "../../Components/Global/Tabs";
import { GlobalTitle } from "../../Components/Global/Title";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { Buttons } from "../../Components/Pages/Event/Buttons";
import { Description } from "../../Components/Pages/Event/Description";
import { Individual } from "../../Components/Pages/Event/Individual";
import { StepOne } from "../../Components/Pages/Event/Tickets/Steps/1";
import { StepTwo } from "../../Components/Pages/Event/Tickets/Steps/2";
import { Video } from "../../Components/Pages/Event/Video";
import { useCart } from "../../context/cart";
import Theme from "../../styles/themes";
import { getAPI, loginVerifyAPI } from "../../utils/api";
import { Banner, ButtonGroup, Container, Icon, Image, Text } from "./styles";

export function Event() {
  const navigation = useNavigation<any>();
  const [eventDetails, setEventDetails] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(false);
  const { id } = useRoute().params as any;
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [logged, setLogged] = useState(false);
  const [bannerNumber, setBannerNumber] = useState(0);
  const { cart } = useCart();

  async function getEventInfo() {
    handleMatchBanner();
    const connect = await getAPI(`/event/${id}`);
    if (connect.status !== 200) {
      Alert.alert(connect.body);
      return navigation.goBack();
    }
    setEventDetails(connect.body);
    return setLoading(false);
  }

  useEffect(() => {
    if (id) {
      getEventInfo();
    }
  }, [id]);

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      setLogged(true);
    }
  }

  useEffect(() => {
    handleVerify();
  }, []);

  const handleNext = () => {
    if (type !== "") {
      return setType("");
    }
    if (step === 1 && eventDetails?.products.length !== 0) {
      return setStep(step + 1);
    }
    if (
      step === 1 &&
      eventDetails?.products.length === 0 &&
      cart.ticket.ticket.length === 0
    ) {
      return Alert.alert("Selecione um (ou mais) Ingresso(s)");
    }

    if (
      step === 1 &&
      eventDetails?.products.length === 0 &&
      cart.ticket.ticket.length !== 0
    ) {
      setLoading1(true);
      logged
        ? navigation.navigate("Checkout")
        : navigation.navigate("Login", { page: "Checkout" });
      return setLoading1(false);
    }
    if (
      step === 2 &&
      type === "" &&
      cart.ticket.ticket.length === 0 &&
      cart.product.length === 0
    ) {
      setLoading1(true);
      Alert.alert("Selecione um (ou mais) Produto(s)");
      return setLoading1(false);
    }
    if (
      (step === 2 && type === "" && cart.ticket.ticket.length !== 0) ||
      cart.product.length !== 0
    ) {
      setLoading1(true);
      logged
        ? navigation.navigate("Checkout")
        : navigation.navigate("Login", { page: "Checkout" });
      return setLoading1(false);
    }
  };

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

  const scrollRef = useRef<any>();
  const handleScroll = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const handleMatchBanner = () => {
    function generateRandomNumber(min: number, max: number) {
      const randomNumber = Math.random() * (max - min + 1) + min;
      return Math.floor(randomNumber);
    }

    const randomNumber = generateRandomNumber(1, 5);
    return setBannerNumber(randomNumber);
  };

  return (
    <Container
      contentContainerStyle={{ flexGrow: 1, paddingBottom: RFValue(80) }}
      ref={scrollRef}
    >
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Header />
          <Image source={{ uri: eventDetails?.photo_location }} />
          <LineBreak />
          <HorizontalView
            style={{ justifyContent: "space-between", paddingRight: 10 }}
          >
            <View style={{ width: "83%" }}>
              <GlobalTitle title={eventDetails?.name} />
            </View>
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
          </HorizontalView>
          <Buttons
            Geo={eventDetails?.googleLink}
            Insta={eventDetails?.instagram}
            Whats={eventDetails?.whatsapp}
          />
          <Individual
            date={eventDetails?.date}
            local={eventDetails?.local}
            city={eventDetails?.city.name}
            state={eventDetails?.city.state}
          />

          {step === 1 &&
          eventDetails?.ticketSlots.length === 0 &&
          eventDetails?.products.length !== 0 ? (
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                fontSize: RFValue(20),
                marginTop: "5%",
              }}
            >
              Nenhum ingresso disponível
            </Text>
          ) : step === 1 && eventDetails?.ticketSlots.length !== 0 ? (
            <>
              <ButtonGroup style={{ marginTop: 10, marginBottom: 10 }}>
                <Tabs active={true} />
                <Tabs active={false} />
                <Tabs active={false} />
              </ButtonGroup>
              <StepOne ticketSlots={eventDetails?.ticketSlots[0]} />
            </>
          ) : step === 2 &&
            eventDetails?.products.length === 0 &&
            eventDetails?.ticketSlots.length !== 0 ? (
            <Text style={{ alignSelf: "center", textAlign: "center" }}>
              Nenhum Produto Disponível
            </Text>
          ) : step === 2 && eventDetails?.products.length !== 0 ? (
            <>
              <ButtonGroup style={{ marginTop: 10, marginBottom: 10 }}>
                <Tabs active={true} />
                <Tabs active={false} />
                <Tabs active={false} />
              </ButtonGroup>
              <StepTwo
                product={eventDetails?.products}
                type={type}
                setType={setType}
              />
            </>
          ) : (
            <Text style={{ alignSelf: "center", textAlign: "center" }}>
              Nenhum Ingresso ou Produto Disponível
            </Text>
          )}

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
              width={150}
              height={40}
              fontSize={18}
              disabled={step === 1 ? true : false}
              onPress={
                step === 2 && type !== ""
                  ? () => setType("")
                  : () => setStep(step - 1)
              }
            />
            <Button
              title={step === 1 || type !== "" ? "Próximo" : "Finalizar"}
              background={`${Theme.color.confirmation}`}
              color={`${Theme.color.background}`}
              width={150}
              height={40}
              fontSize={18}
              onPress={handleNext}
              disabled={
                eventDetails?.ticketSlots.length === 0 &&
                eventDetails.products.length === 0
                  ? true
                  : false
              }
              loading={loading1}
            />
          </HorizontalView>

          <TouchableOpacity onPress={() => navigation.navigate("MyMatches")}>
            <Banner
              source={
                bannerNumber === 1
                  ? require("../../../assets/Global/Match1.png")
                  : bannerNumber === 2
                  ? require("../../../assets/Global/Match2.png")
                  : bannerNumber === 3
                  ? require("../../../assets/Global/Match3.png")
                  : bannerNumber === 4
                  ? require("../../../assets/Global/Match4.png")
                  : require("../../../assets/Global/Match5.png")
              }
            />
          </TouchableOpacity>
          <LineBreak />
          {eventDetails?.description.length === 0 ? (
            <></>
          ) : (
            <Description description={eventDetails?.description[0]} />
          )}
          {eventDetails?.video && <Video video={eventDetails?.video} />}
          <Button
            background={`${Theme.color.confirmation}`}
            color={`${Theme.color.background}`}
            title=" Escolher Meus Ingressos"
            width={250}
            height={50}
            fontSize={16}
            onPress={handleScroll}
          >
            <Icon
              source={require("../../../assets/Global/Icons/ticketIcon.png")}
            />
          </Button>
          <LineBreak />
          {eventDetails.description.length === 0 ? (
            <></>
          ) : eventDetails?.description.length === 1 ? (
            <></>
          ) : (
            eventDetails?.description
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

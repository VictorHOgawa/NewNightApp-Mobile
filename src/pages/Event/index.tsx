import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Global/Header";
import { GlobalTitle } from "../../Components/Global/Title";
import { Buttons } from "../../Components/Pages/Event/Buttons";
import { Description } from "../../Components/Pages/Event/Description";
import { Individual } from "../../Components/Pages/Event/Individual";
import { getAPI } from "../../utils/api";
import { Banner, ButtonGroup, Container, Icon, Image, Text } from "./styles";
import { Video } from "../../Components/Pages/Event/Video";
import { Button } from "../../Components/Global/Button";
import Theme from "../../styles/themes";
import { LineBreak } from "../../Components/Global/LineBreak";
import { Tabs } from "../../Components/Global/Tabs";
import { StepOne } from "../../Components/Pages/Event/Tickets/Steps/1";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StepTwo } from "../../Components/Pages/Event/Tickets/Steps/2";

export function Event() {
  const navigation = useNavigation<any>();
  const [eventDetails, setEventDetails] = useState<any>();
  const [loading, setLoading] = useState(true);
  const { id } = useRoute().params as any;
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  async function getEventInfo() {
    const connect = await getAPI(`/event/${id}`);
    if (connect.status === 200) {
      setEventDetails(connect.body);
      return setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getEventInfo();
    }
  }, [id]);
  console.log("step", step);
  console.log("type", type);
  console.log("eventDetails: ", eventDetails);
  return (
    <Container contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}>
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
      {loading ? (
        <></>
      ) : (
        <>
          {eventDetails?.ticketSlots.length === 0 ? (
            <Text>Nenhum ingresso disponível</Text>
          ) : step === 1 ? (
            <>
              <ButtonGroup style={{ marginTop: 10 }}>
                <Tabs active={true} />
                <Tabs active={false} />
                <Tabs active={false} />
              </ButtonGroup>
              <StepOne ticketSlots={eventDetails?.ticketSlots[0]} />
            </>
          ) : (
            <StepTwo
              product={eventDetails?.products}
              type={type}
              setType={setType}
            />
          )}
        </>
      )}
      {loading ? (
        <></>
      ) : (
        <>
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
              color={`${Theme.color.gray_10}`}
              width={150}
              height={40}
              fontSize={18}
              onPress={
                type !== ""
                  ? () => setType("")
                  : step === 2 && type === ""
                  ? () => navigation.navigate("/checkout")
                  : () => setStep(step + 1)
              }
            />
          </HorizontalView>
        </>
      )}

      <Banner />

      {loading ? (
        <></>
      ) : (
        <>
          <Description description={eventDetails?.description[0]} />
          <Video video={eventDetails?.video} />
        </>
      )}
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
          <Icon source={require("../../../assets/Global/Icons/sendIcon.png")} />
        </Button>
      </ButtonGroup>
      <LineBreak />
      {eventDetails?.description.length === 1 ? (
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
    </Container>
  );
}

import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { AuthPostAPI, authGetAPI } from "../../../utils/api";
import { Alert } from "react-native";
import {
  Container,
  EventPhoto,
  Help,
  Icon,
  Image,
  JobCard,
  Map,
  ModalBody,
  Names,
  Text,
  TicketIcon,
} from "./styles";
import { LoadingIn } from "../../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../../Components/Loading/LoadingOut";
import { Header } from "../../../Components/Global/Header";
import { Ad } from "../../../Components/Global/Ad";
import { GlobalTitle } from "../../../Components/Global/Title";
import { HorizontalView } from "../../../Components/Global/View/HorizontalView";
import { VerticalView } from "../../../Components/Global/View/VerticalView";
import moment from "moment";
import { Button } from "../../../Components/Global/Button";
import Theme from "../../../styles/themes";
import { Scanner } from "../../../Components/Global/Scanner";
import { More } from "../../../Components/Global/More";
import { RFValue } from "react-native-responsive-fontsize";
import Modal from "react-native-modal";

export function Portaria() {
  const navigation = useNavigation<any>();
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [portariaCode, setPortariaCode] = useState("");
  const [openScanner, setOpenScanner] = useState(false);
  const [qrCodeInfo, setQrCodeInfo] = useState<any>({ type: "", data: "" });
  const [verifyTicket, setVerifyTicket] = useState(false);
  const [receivedInfo, setReceivedInfo] = useState<any>();
  const [scanned, setScanned] = useState(false);
  const [loading1, setLoading1] = useState(false);

  async function getDetails() {
    setLoading(true);
    const connect = await authGetAPI("/user/work");
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    setJobs(connect.body.eventWork);
    return setLoading(false);
  }

  const handleClick = async () => {
    setLoading(true);
    const connect = await AuthPostAPI(`/user/work/${portariaCode}`, {});
    if (connect.status !== 200) {
      Alert.alert(connect.body);
      return setLoading(false);
    }
    navigation.replace("Jobs");
    return setLoading(false);
  };

  async function sendQrCode(qrCode: any) {
    const formattedQrCode = JSON.parse(qrCode);
    const connect = await AuthPostAPI(
      `/user/work/qr-code/${formattedQrCode.id}?type=${formattedQrCode.type}`,
      {}
    );
    console.log("connect: ", connect);
    if (connect.status !== 200) {
      setScanned(false);

      return Alert.alert(connect.body);
    }

    setReceivedInfo(connect.body);
    return setVerifyTicket(true);
  }

  async function Approve() {
    setLoading1(true);
    const formattedQrCode = JSON.parse(qrCodeInfo.data);
    const connect = await AuthPostAPI(
      `/user/work/confirm/${formattedQrCode.id}?type=${formattedQrCode.type}`,
      {}
    );
    if (connect.status !== 200) {
      Alert.alert(connect.body);
      return setLoading1(false);
    }
    Alert.alert(
      receivedInfo.item.type === "ticket"
        ? "Ingresso Liberado"
        : "Produto Liberado"
    );
    setScanned(false);
    setVerifyTicket(false);
    return setLoading1(false);
  }

  const handleBack = () => {
    setVerifyTicket(false);
    setScanned(false);
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <Container>
        {loading ? (
          <LoadingIn />
        ) : (
          <>
            <LoadingOut />
            <Header />
            <Ad />
            <GlobalTitle title={"Jobs - Portaria"} />
            <Map
              data={jobs}
              renderItem={({ item }) => (
                <JobCard>
                  <HorizontalView style={{ alignItems: "center" }}>
                    <Image source={{ uri: item.event.photo_location }} />
                    <VerticalView style={{ marginLeft: "5%" }}>
                      <Text style={{ fontWeight: "bold" }}>Nome do Evento</Text>
                      <Text>
                        <Icon
                          source={require("../../../../assets/Global/Icons/clockIcon.png")}
                        />
                        <Text style={{ fontWeight: "bold" }}>
                          {""} {moment(item.event.date).format("DD/MM/YYYY")}
                        </Text>{" "}
                        às {moment(item.event.date).format("HH:mm")}
                      </Text>
                      <Text>
                        <Icon
                          source={require("../../../../assets/Global/Icons/pinIcon.png")}
                        />
                        <Text style={{ fontWeight: "bold" }}>
                          {""} {item.event.local}
                        </Text>{" "}
                        {item.event.city.name} / {item.event.city.state}
                      </Text>
                    </VerticalView>
                  </HorizontalView>
                  <Button
                    title="Ler QrCode"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.background}`}
                    height={40}
                    width={150}
                    onPress={() => setOpenScanner(true)}
                  />
                  <Modal
                    isVisible={openScanner}
                    onModalHide={() => setOpenScanner(false)}
                    onBackdropPress={() => setOpenScanner(false)}
                    onBackButtonPress={() => setOpenScanner(false)}
                  >
                    <Scanner
                      handleScan={(item: any) => sendQrCode(item)}
                      openScanner={openScanner}
                      setOpenScanner={setOpenScanner}
                      qrCodeInfo={qrCodeInfo}
                      setQrCodeInfo={setQrCodeInfo}
                      scanned={scanned}
                      setScanned={setScanned}
                    />
                    <Modal
                      isVisible={verifyTicket}
                      onModalHide={() => setVerifyTicket(false)}
                      onBackdropPress={() => setVerifyTicket(false)}
                      onBackButtonPress={() => setVerifyTicket(false)}
                    >
                      <ModalBody>
                        {receivedInfo ? (
                          <>
                            <EventPhoto
                              source={{
                                uri: receivedInfo.item.event.photo_location,
                              }}
                            />
                            <Names
                              style={{
                                fontSize: RFValue(18),
                                color: Theme.color.primary_80,
                              }}
                            >
                              {receivedInfo.item.event.name}
                            </Names>
                            <Names style={{ marginTop: "2%" }}>
                              {receivedInfo.item.user.name}
                            </Names>
                            {receivedInfo.item.type === "ticket" ? (
                              <HorizontalView style={{ marginTop: "5%" }}>
                                <TicketIcon
                                  source={require("../../../../assets/Global/Icons/ticketIcon.png")}
                                />
                                <Names>
                                  {""} {receivedInfo.item.ticket.name}
                                </Names>
                              </HorizontalView>
                            ) : (
                              <></>
                            )}
                            <VerticalView
                              style={{
                                alignItems: "start",
                                width: "100%",
                                marginTop: "5%",
                              }}
                            >
                              <HorizontalView
                                style={{
                                  alignItems: "center",
                                  width: "100%",
                                }}
                              >
                                <Icon
                                  source={require("../../../../assets/Global/Icons/clockIcon.png")}
                                />
                                <Text>
                                  {""}{" "}
                                  {moment(receivedInfo.item.event.date).format(
                                    "DD/MM/YYYY"
                                  )}{" "}
                                  às{" "}
                                  {moment(receivedInfo.item.event.date).format(
                                    "HH:mm"
                                  )}
                                </Text>
                              </HorizontalView>
                              <HorizontalView
                                style={{
                                  alignItems: "center",
                                  width: "100%",
                                }}
                              >
                                <Icon
                                  source={require("../../../../assets/Global/Icons/pinIcon.png")}
                                />
                                <Text>
                                  {""} {receivedInfo.item.event.local}{" "}
                                  {receivedInfo.item.event.city.name} /{" "}
                                  {receivedInfo.item.event.city.state}
                                </Text>
                              </HorizontalView>
                            </VerticalView>
                            <HorizontalView
                              style={{
                                justifyContent: "space-evenly",
                                width: "100%",
                              }}
                            >
                              <Button
                                title="Retornar"
                                background={Theme.color.primary_100}
                                color={Theme.color.background}
                                height={40}
                                width={125}
                                onPress={handleBack}
                              />
                              <Button
                                title="Aprovar Entrada"
                                background={Theme.color.confirmation}
                                color={Theme.color.background}
                                height={40}
                                width={125}
                                onPress={Approve}
                                loading={loading1}
                              />
                            </HorizontalView>
                          </>
                        ) : (
                          <></>
                        )}
                      </ModalBody>
                    </Modal>
                  </Modal>
                </JobCard>
              )}
            />
            <Help>
              <Icon
                source={require("../../../../assets/Global/Icons/youtubeIcon.png")}
              />
              <Text> {""}Dúvidas? Veja esse Rápido Vídeo</Text>
            </Help>

            <More
              style={{ bottom: "2%" }}
              type={"portaria"}
              handleClick={handleClick}
              portariaCode={portariaCode}
              setPortariaCode={setPortariaCode}
            />
          </>
        )}
      </Container>
    </>
  );
}

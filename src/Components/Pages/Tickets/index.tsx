import moment from "moment";
import { GlobalTitle } from "../../Global/Title";
import { VerticalView } from "../../Global/View/VerticalView";
import {
  Area,
  Card,
  Close,
  Container,
  Details,
  Help,
  Icons,
  Map,
  Match,
  ModalBody,
  NoTickets,
  QrCodeImage,
  Test,
  Text,
  TicketImage,
} from "./styles";
import Theme from "../../../styles/themes";
import { HorizontalView } from "../../Global/View/HorizontalView";
import { Button } from "../../Global/Button";
import { More } from "../../Global/More";
import { Alert, Dimensions, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useState, useEffect } from "react";
import { authDeleteAPI, authGetAPI } from "../../../utils/api";
import QRCode from "react-qr-code";
import * as Clipboard from "expo-clipboard";
import Modal from "react-native-modal";

interface TicketProps {
  tickets: any;
  reload: any;
}

export function TicketCards({ tickets, reload }: TicketProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [qrCode, setQrCode] = useState<any>({ id: "", type: "" });
  const [qrCodeImage, setQrCodeImage] = useState<any>();
  const [showQrCodeImage, setShowQrCodeImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [openTransfer, setOpenTransfer] = useState(false);

  const handlePay = async (item: any, index: number) => {
    setCurrentIndex(index);
    if (item.status === "ACTIVE") {
      setLoading(true);
      setId(item.id);
      setType("ticket");
      Alert.alert(
        "Cuidado!",
        "Esse QrCode é de uso Único, não Compartilhe com Ninguém!",
        [
          {
            text: "Ver qrCode",
            onPress: () => {
              setShow(true);
              return setLoading(false);
            },
          },
          {
            text: "Voltar",
          },
        ]
      );
    }
    if (item.status === "INACTIVE") {
      setLoading(true);
      const connect = await authGetAPI(`/user/ticket/payment/${item.id}`);
      if (connect.status !== 200) {
        setLoading(false);
        return Alert.alert(connect.body);
      }
      setQrCodeImage(connect.body.payment);
      setShowQrCodeImage(true);
      return setLoading(false);
    }
  };

  const handleModify = async (item: any, index: number) => {
    setCurrentIndex(index);
    if (item.status === "ACTIVE") {
      return setOpenTransfer(true);
    }
    if (item.status === "INACTIVE" || "DISABLED") {
      setLoading1(true);
      const connect = await authDeleteAPI(`/user/ticket/${item.id}`);
      if (connect.status === 200) {
        reload();
        return setLoading1(false);
      }
    }
  };

  useEffect(() => {
    setQrCode({
      id: id,
      type: type,
    });
  }, [id, type]);

  return (
    <Container>
      <GlobalTitle title="Meus Ingressos" />
      {tickets.length === 0 ? (
        <NoTickets>
          <Text>Nenhum Ingresso Encontrado</Text>
        </NoTickets>
      ) : (
        <>
          <VerticalView style={{ flex: 1, paddingBottom: 20 }}>
            <Map
              data={tickets}
              renderItem={({ item, index }) => (
                <>
                  <Card>
                    <Details>
                      <TicketImage
                        source={{ uri: item.event.photo_location }}
                      />
                      <VerticalView>
                        <Text
                          style={{ fontWeight: "bold", fontSize: RFValue(15) }}
                        >
                          {item.event.name}
                        </Text>
                        <Text>
                          <Icons
                            source={require("../../../../assets/Global/Icons/clockIcon.png")}
                          />
                          {""}
                          <Text style={{ fontWeight: "bold" }}>
                            {""} {moment(item.event.date).format("LL")} {""}
                          </Text>
                          às {moment(item.event.date).format("LT")}
                        </Text>
                        <Text>
                          <Icons
                            source={require("../../../../assets/Global/Icons/pinIcon.png")}
                          />
                          {""}
                          <Text style={{ fontWeight: "bold" }}>
                            {""} {item.event.local}{" "}
                          </Text>
                          {""}
                          {item.event.city.name} / {item.event.city.state}
                        </Text>
                      </VerticalView>
                      <Area>
                        <Text>
                          Área: {""}
                          <Text
                            style={{
                              fontWeight: "bold",
                              color: `${Theme.color.primary_60}`,
                            }}
                          >
                            {item.ticket.name}
                          </Text>
                        </Text>
                      </Area>
                    </Details>
                    <HorizontalView
                      style={{
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Button
                        title={
                          item.status === "ACTIVE" ? "Transferir" : "Excluir"
                        }
                        background={`${Theme.color.primary_40}`}
                        color={`${Theme.color.gray_10}`}
                        fontSize={10}
                        height={30}
                        width={80}
                        onPress={() => handleModify(item, index)}
                        loading={loading1 && currentIndex === index}
                      />
                      {item.status === "DISABLED" ? (
                        <></>
                      ) : (
                        <Button
                          title={
                            item.status === "ACTIVE" ? "QrCode" : "Pagamento"
                          }
                          background={`${Theme.color.confirmation}`}
                          color={`${Theme.color.background}`}
                          fontSize={10}
                          height={30}
                          width={80}
                          onPress={() => handlePay(item, index)}
                          loading={loading && currentIndex === index}
                        />
                      )}
                      <Match
                        source={require("../../../../assets/Purchased/Match.png")}
                      />
                    </HorizontalView>
                  </Card>
                  <Modal
                    isVisible={showQrCodeImage}
                    onModalHide={() => setShowQrCodeImage(false)}
                    onBackdropPress={() => setShowQrCodeImage(false)}
                    onBackButtonPress={() => setShowQrCodeImage(false)}
                  >
                    {qrCodeImage ? (
                      <ModalBody style={{ padding: 10, borderRadius: 10 }}>
                        <QrCodeImage
                          source={{
                            uri: `data:image/png;base64, ${qrCodeImage.encodedImage}`,
                          }}
                          style={{
                            width: Dimensions.get("window").width * 0.8,
                            height: Dimensions.get("window").width * 0.8,
                          }}
                        />
                        <Button
                          title="Copiar Código"
                          background={Theme.color.pix}
                          color={Theme.color.gray_10}
                          width={225}
                          height={40}
                          onPress={() =>
                            Clipboard.setStringAsync(qrCodeImage.payload)
                          }
                        />
                        <Button
                          title="Voltar"
                          background={Theme.color.primary_80}
                          color={Theme.color.gray_10}
                          width={225}
                          height={40}
                          onPress={() => setShowQrCodeImage(false)}
                        />
                      </ModalBody>
                    ) : (
                      <></>
                    )}
                  </Modal>
                  <Modal
                    isVisible={openTransfer}
                    onModalHide={() => setOpenTransfer(false)}
                    onBackdropPress={() => setOpenTransfer(false)}
                    onBackButtonPress={() => setOpenTransfer(false)}
                  >
                    <ModalBody style={{ padding: 10, borderRadius: 10 }}>
                      <Button
                        title="Copiar Código"
                        background={Theme.color.pix}
                        color={Theme.color.gray_10}
                        width={225}
                        height={40}
                        onPress={() =>
                          Clipboard.setStringAsync(
                            tickets[currentIndex].transfer_code
                          )
                        }
                      />
                      <Button
                        title="Voltar"
                        background={Theme.color.primary_80}
                        color={Theme.color.gray_10}
                        width={225}
                        height={40}
                        onPress={() => setOpenTransfer(false)}
                      />
                    </ModalBody>
                  </Modal>
                  <Modal
                    isVisible={show}
                    onModalHide={() => setShow(false)}
                    onBackdropPress={() => setShow(false)}
                    onBackButtonPress={() => setShow(false)}
                  >
                    <ModalBody style={{ padding: 10, borderRadius: 10 }}>
                      <View
                        style={{
                          padding: 5,
                          backgroundColor: "white",
                          alignItems: "center",
                        }}
                      >
                        <QRCode
                          value={JSON.stringify(qrCode)}
                          size={Dimensions.get("window").width * 0.8}
                        />
                      </View>
                      <Button
                        title="Copiar Código de Transferência"
                        background={Theme.color.pix}
                        color={Theme.color.gray_10}
                        width={225}
                        height={40}
                        onPress={() =>
                          Clipboard.setStringAsync(
                            tickets[currentIndex].transfer_code
                          )
                        }
                      />
                      <Button
                        title="Voltar"
                        background={Theme.color.primary_80}
                        color={Theme.color.gray_10}
                        width={225}
                        height={40}
                        onPress={() => setShow(false)}
                      />
                    </ModalBody>
                  </Modal>
                </>
              )}
            />
          </VerticalView>
        </>
      )}
      <Help>
        <Icons
          source={require("../../../../assets/Global/Icons/youtubeIcon.png")}
        />
        <Text> {""}Dúvidas? Veja esse Rápido Vídeo</Text>
      </Help>
      <More onPress={() => setOpen(true)} type="ticket" />
    </Container>
  );
}

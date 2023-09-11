import moment, { relativeTimeRounding } from "moment";
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
  QrCodeImage,
  Test,
  Text,
  TicketImage,
} from "./styles";
import Theme from "../../../styles/themes";
import { HorizontalView } from "../../Global/View/HorizontalView";
import { Button } from "../../Global/Button";
import { More } from "../../Global/More";
import { useState, useEffect } from "react";
import { Modal, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BackButton } from "../../Global/Back";
import { AltContainer, AltLogo } from "../../Global/Header/styles";
import QRCode from "react-qr-code";
import { authDeleteAPI, authGetAPI } from "../../../utils/api";

interface ProductProps {
  events: any;
  reload: any;
}

export function ProductCards({ events, reload }: ProductProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [qrCode, setQrCode] = useState<any>({ id: "", type: "" });
  const [qrCodeImage, setQrCodeImage] = useState<any>();
  const [showQrCodeImage, setShowQrCodeImage] = useState(false);

  const handlePay = async (item: any) => {
    console.log("item: ", item);
    if (item.status === "ACTIVE") {
      setId(item.id);
      setType("product");
      setShow(true);
    }
    if (item.status === "INACTIVE") {
      const connect = await authGetAPI(`/user/product/payment/${item.id}`);
      setQrCodeImage(connect.body.payment);
      setShowQrCodeImage(true);
    }
  };

  const handleModify = async (item: any) => {
    if (item.status === "ACTIVE") {
      return;
    }
    if (item.status === "INACTIVE" || "DISABLED") {
      const connect = await authDeleteAPI(`/user/product/${item.id}`);
      if (connect.status === 200) {
        return reload();
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
      <GlobalTitle title="Meus Produtos" />
      <VerticalView style={{ flex: 1, paddingBottom: 20 }}>
        <Map
          data={events}
          renderItem={({ item }) => (
            <>
              <Card>
                <Details>
                  <TicketImage source={{ uri: item.photo }} />
                  <VerticalView>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(15) }}>
                      {item.eventName}
                    </Text>
                    <Text>
                      <Icons
                        source={require("../../../../assets/Global/Icons/clockIcon.png")}
                      />
                      {""}
                      <Text style={{ fontWeight: "bold" }}>
                        {""}
                        {moment(item.eventDate).format("LL")} {""}
                      </Text>
                      às {moment(item.eventDate).format("LT")}
                    </Text>
                    <Text>
                      <Icons
                        source={require("../../../../assets/Global/Icons/pinIcon.png")}
                      />
                      {""}
                      <Text style={{ fontWeight: "bold" }}>
                        {""}
                        {item.eventLocal}{" "}
                      </Text>
                      {""}
                      {item.city.name} / {item.city.state}
                    </Text>
                  </VerticalView>
                </Details>
                <HorizontalView
                  style={{
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    title={"Produtos"}
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.background}`}
                    fontSize={10}
                    height={30}
                    width={80}
                    onPress={handleOpen}
                  />
                  <Match
                    source={require("../../../../assets/Purchased/Match.png")}
                  />
                </HorizontalView>
              </Card>
              <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={handleClose}
              >
                <ModalBody>
                  <AltContainer>
                    <BackButton onPress={handleClose} />
                    <AltLogo
                      source={require("../../../../assets/Global/Logo.png")}
                    />
                  </AltContainer>
                  <GlobalTitle title={item.eventName} />
                  <VerticalView>
                    <Map
                      data={item.products}
                      renderItem={({ item }) => (
                        <>
                          <Card>
                            <View
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: 5,
                              }}
                            >
                              <TicketImage
                                source={{ uri: item.photo_location }}
                              />
                              <VerticalView
                                style={{
                                  display: "flex",
                                  alignSelf: "center",
                                  width: "80%",
                                  alignItems: "center",
                                }}
                              >
                                <Text
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: RFValue(15),
                                  }}
                                >
                                  {item.name}
                                </Text>
                              </VerticalView>
                            </View>
                            <HorizontalView
                              style={{
                                alignItems: "center",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <Button
                                title={
                                  item.status === "ACTIVE"
                                    ? "Transferir"
                                    : "Excluir"
                                }
                                background={`${Theme.color.primary_40}`}
                                color={`${Theme.color.gray_10}`}
                                fontSize={10}
                                height={30}
                                width={80}
                                onPress={() => handleModify(item)}
                              />
                              {item.status === "DISABLED" ? (
                                <></>
                              ) : (
                                <Button
                                  title={
                                    item.status === "ACTIVE"
                                      ? "QrCode"
                                      : "Pagamento"
                                  }
                                  background={`${Theme.color.confirmation}`}
                                  color={`${Theme.color.background}`}
                                  fontSize={10}
                                  height={30}
                                  width={80}
                                  onPress={() => handlePay(item)}
                                />
                              )}
                              <Match
                                source={require("../../../../assets/Purchased/Match.png")}
                              />
                            </HorizontalView>
                          </Card>
                        </>
                      )}
                    />
                  </VerticalView>
                </ModalBody>
              </Modal>
              <Modal
                visible={showQrCodeImage}
                onRequestClose={() => setShowQrCodeImage(false)}
                animationType="slide"
                transparent
              >
                {qrCodeImage ? (
                  <QrCodeImage
                    source={{
                      uri: `data:image/png;base64, ${qrCodeImage.encodedImage}`,
                    }}
                  />
                ) : (
                  <></>
                )}
              </Modal>
            </>
          )}
        />
      </VerticalView>
      <Help>
        <Icons
          source={require("../../../../assets/Global/Icons/youtubeIcon.png")}
        />
        <Text> {""}Dúvidas? Veja esse Rápido Vídeo</Text>
      </Help>
      <More type="product" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `${Theme.color.primary_100}`,
          }}
        >
          <QRCode value={JSON.stringify(qrCode)} />
          <Button
            title="Voltar"
            background={Theme.color.primary_80}
            color={Theme.color.gray_10}
            width={300}
            height={40}
            onPress={() => setShow(false)}
          />
        </View>
      </Modal>
    </Container>
  );
}

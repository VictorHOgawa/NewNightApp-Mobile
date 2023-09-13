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
  NoProducts,
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
import { Alert, Modal, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BackButton } from "../../Global/Back";
import { AltContainer, AltLogo } from "../../Global/Header/styles";
import QRCode from "react-qr-code";
import { authDeleteAPI, authGetAPI } from "../../../utils/api";
import * as Clipboard from "expo-clipboard";

interface ProductProps {
  events: any;
  reload: any;
}

export function ProductCards({ events, reload }: ProductProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = (index: number) => {
    setEventCurrentIndex(index);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [qrCode, setQrCode] = useState<any>({ id: "", type: "" });
  const [qrCodeImage, setQrCodeImage] = useState<any>();
  const [showQrCodeImage, setShowQrCodeImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [openTransfer, setOpenTransfer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [eventCurrentIndex, setEventCurrentIndex] = useState(1);

  const handlePay = async (item: any, index: number) => {
    setCurrentIndex(index);
    if (item.status === "ACTIVE") {
      setId(item.id);
      setType("product");
      setShow(true);
    }
    if (item.status === "INACTIVE") {
      setLoading(true);
      const connect = await authGetAPI(`/user/product/payment/${item.id}`);
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
      const connect = await authDeleteAPI(`/user/product/${item.id}`);
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
      <GlobalTitle title="Meus Produtos" />
      {events.length === 0 ? (
        <NoProducts>
          <Text>Nenhum Produto Encontrado</Text>
        </NoProducts>
      ) : (
        <>
          <VerticalView style={{ flex: 1, paddingBottom: 20 }}>
            <Map
              data={events}
              renderItem={({ item, index }) => (
                <>
                  <Card>
                    <Details>
                      <TicketImage source={{ uri: item.photo }} />
                      <VerticalView>
                        <Text
                          style={{ fontWeight: "bold", fontSize: RFValue(15) }}
                        >
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
                        onPress={() => handleOpen(index)}
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
                      <VerticalView style={{ flex: 1 }}>
                        <Map
                          data={item.products}
                          renderItem={({ item, index }) => (
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
                                    onPress={() => handleModify(item, index)}
                                    loading={loading1 && currentIndex === index}
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
                                      onPress={() => handlePay(item, index)}
                                      loading={
                                        loading && currentIndex === index
                                      }
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
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: Theme.color.background,
                          width: "90%",
                          alignSelf: "center",
                          marginTop: "25%",
                          padding: "5%",
                          borderRadius: 20,
                        }}
                      >
                        <QrCodeImage
                          source={{
                            uri: `data:image/png;base64, ${qrCodeImage.encodedImage}`,
                          }}
                        />
                        <Button
                          title="Copiar Código"
                          background={Theme.color.pix}
                          color={Theme.color.gray_10}
                          width={300}
                          height={40}
                          onPress={() =>
                            Clipboard.setStringAsync(
                              events[eventCurrentIndex].products[currentIndex]
                                .transfer_code
                            )
                          }
                        />
                        <Button
                          title="Voltar"
                          background={Theme.color.primary_80}
                          color={Theme.color.gray_10}
                          width={300}
                          height={40}
                          onPress={() => setShowQrCodeImage(false)}
                        />
                      </View>
                    ) : (
                      <></>
                    )}
                  </Modal>
                  <Modal
                    visible={openTransfer}
                    onRequestClose={() => setOpenTransfer(false)}
                    animationType="slide"
                    transparent
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: Theme.color.background,
                        width: "90%",
                        alignSelf: "center",
                        marginTop: "25%",
                        padding: "5%",
                        borderRadius: 20,
                      }}
                    >
                      <Button
                        title="Copiar Código"
                        background={Theme.color.pix}
                        color={Theme.color.gray_10}
                        width={300}
                        height={40}
                        onPress={() =>
                          Clipboard.setStringAsync(
                            events[eventCurrentIndex].products[currentIndex]
                              .transfer_code
                          )
                        }
                      />
                      <Button
                        title="Voltar"
                        background={Theme.color.primary_80}
                        color={Theme.color.gray_10}
                        width={300}
                        height={40}
                        onPress={() => setOpenTransfer(false)}
                      />
                    </View>
                  </Modal>
                </>
              )}
            />
          </VerticalView>

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
                backgroundColor: Theme.color.background,
                width: "90%",
                alignSelf: "center",
                marginTop: "25%",
                padding: "5%",
                borderRadius: 20,
              }}
            >
              <View style={{ padding: 5, backgroundColor: "white" }}>
                <QRCode value={JSON.stringify(qrCode)} />
              </View>
              <Button
                title="Copiar Código"
                background={Theme.color.pix}
                color={Theme.color.gray_10}
                width={300}
                height={40}
              />
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
        </>
      )}
      <Help>
        <Icons
          source={require("../../../../assets/Global/Icons/youtubeIcon.png")}
        />
        <Text> {""}Dúvidas? Veja esse Rápido Vídeo</Text>
      </Help>
      <More type="product" />
    </Container>
  );
}

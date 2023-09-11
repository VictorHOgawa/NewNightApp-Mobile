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
  Test,
  Text,
  TicketImage,
} from "./styles";
import Theme from "../../../styles/themes";
import { HorizontalView } from "../../Global/View/HorizontalView";
import { Button } from "../../Global/Button";
import { More } from "../../Global/More";
import { Modal } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useState, useEffect } from "react";
interface TicketProps {
  tickets: any;
}

export function TicketCards({ tickets }: TicketProps) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [qrCode, setQrCode] = useState<any>({ id: "", type: "" });
  const [open, setOpen] = useState(false);
  const handlePay = (item: any) => {
    if (item.status === "ACTIVE") {
      console.log("entrou");
      setId(item.id);
      setType("ticket");
      setShow(true);
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
      <VerticalView style={{ flex: 1, paddingBottom: 20 }}>
        <Map
          data={tickets}
          renderItem={({ item }) => (
            <>
              <Card>
                <Details>
                  <TicketImage source={{ uri: item.event.photo_location }} />
                  <VerticalView>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(15) }}>
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
                    title={item.status === "ACTIVE" ? "Transferir" : "Excluir"}
                    background={`${Theme.color.primary_40}`}
                    color={`${Theme.color.gray_10}`}
                    fontSize={10}
                    height={30}
                    width={80}
                  />
                  <Button
                    title={item.status === "ACTIVE" ? "QrCode" : "Pagamento"}
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.background}`}
                    fontSize={10}
                    height={30}
                    width={80}
                  />
                  <Match
                    source={require("../../../../assets/Purchased/Match.png")}
                  />
                </HorizontalView>
              </Card>
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
      <More onPress={() => setOpen(true)} />
    </Container>
  );
}

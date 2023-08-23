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
import { useState } from "react";
import { Modal } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export function TicketCards() {
  const Tickets = [1, 2, 3];
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <GlobalTitle title="Meus Ingressos" />
      <VerticalView>
        <Map
          data={Tickets}
          renderItem={({ item }) => (
            <>
              <Card>
                <Details>
                  <TicketImage
                    source={require("../../../../assets/Event/Event1.png")}
                  />
                  <VerticalView>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(15) }}>
                      Nome do Evento
                    </Text>
                    <Text>
                      <Icons
                        source={require("../../../../assets/Global/Icons/clockIcon.png")}
                      />
                      {""}
                      <Text style={{ fontWeight: "bold" }}>
                        {""} {moment().format("LL")} {""}
                      </Text>
                      às {moment().format("LT")}
                    </Text>
                    <Text>
                      <Icons
                        source={require("../../../../assets/Global/Icons/pinIcon.png")}
                      />
                      {""}
                      <Text style={{ fontWeight: "bold" }}>
                        {""} Cerveja de Garrafa{" "}
                      </Text>
                      {""}Sinop/MT
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
                        Pista
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
                    title="Excluir"
                    background={`${Theme.color.primary_40}`}
                    color={`${Theme.color.gray_10}`}
                    fontSize={10}
                    height={30}
                    width={80}
                  />
                  <Button
                    title="Pagamento"
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => setOpen(false)}
        style={{
          width: "80%",
          height: "100%",
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <ModalBody>
          <Test />
          <Close onPress={() => setOpen(false)} />
        </ModalBody>
      </Modal>
    </Container>
  );
}

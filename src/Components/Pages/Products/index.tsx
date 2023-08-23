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
import { BackButton } from "../../Global/Back";
import { AltContainer, AltLogo } from "../../Global/Header/styles";

export function ProductCards() {
  const Events = [1, 2, 3];
  const Products = [1, 2, 3];
  const [open, setOpen] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  return (
    <Container>
      <GlobalTitle title="Meus Produtos" />
      <VerticalView>
        <Map
          data={Events}
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
                        {""}
                        {moment().format("LL")} {""}
                      </Text>
                      às {moment().format("LT")}
                    </Text>
                    <Text>
                      <Icons
                        source={require("../../../../assets/Global/Icons/pinIcon.png")}
                      />
                      {""}
                      <Text style={{ fontWeight: "bold" }}>
                        {""}Cerveja de Garrafa{" "}
                      </Text>
                      {""}Sinop/MT
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
                    title="Produtos"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.background}`}
                    fontSize={10}
                    height={30}
                    width={80}
                    onPress={() => setSeeAll(true)}
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
      >
        <ModalBody>
          <Test />
          <Close onPress={() => setOpen(false)} />
        </ModalBody>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={seeAll}
        onRequestClose={() => setSeeAll(false)}
      >
        <ModalBody>
          <AltContainer>
            <BackButton onPress={() => setSeeAll(false)} />
            <AltLogo source={require("../../../../assets/Global/Logo.png")} />
          </AltContainer>
          <GlobalTitle title="Evento X" />
          <VerticalView>
            <Map
              data={Products}
              renderItem={({ item }) => (
                <>
                  <Card>
                    <Details>
                      <TicketImage
                        source={require("../../../../assets/Event/Event1.png")}
                      />
                      <VerticalView>
                        <Text
                          style={{ fontWeight: "bold", fontSize: RFValue(15) }}
                        >
                          Nome do Produto
                        </Text>
                        <Text>
                          <Icons
                            source={require("../../../../assets/Global/Icons/clockIcon.png")}
                          />
                          <Text style={{ fontWeight: "bold" }}>
                            {moment().format("LL")} {""}
                          </Text>
                          às {moment().format("LT")}
                        </Text>
                        <Text>
                          <Icons
                            source={require("../../../../assets/Global/Icons/pinIcon.png")}
                          />
                          <Text style={{ fontWeight: "bold" }}>
                            Cerveja de Garrafa{" "}
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
        </ModalBody>
      </Modal>
    </Container>
  );
}

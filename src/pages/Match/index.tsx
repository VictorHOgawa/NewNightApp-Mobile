import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { BackButton } from "../../Components/Global/Back";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { VerticalView } from "../../Components/Global/View/VerticalView";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { People } from "../../utils/people";
import {
  Background,
  Behind,
  Buttons,
  Card,
  Container,
  Footer1,
  Logo,
  Name1,
  Photo,
  Text,
  Top,
} from "./styles";

export function Match() {
  const [people, setPeople] = useState(People);
  const [shown, setShown] = useState(people[0]);
  return (
    <Container>
      {/* <LoadingFull />
      <Background source={require("../../../assets/Match/Background.png")} />
      <Top>
        <BackButton style={{ marginLeft: -100 }} />
        <Logo
          source={require("../../../assets/Match/matchLogo.png")}
          style={{ marginLeft: -100 }}
        />
      </Top>
      <Card>
        <Photo source={{ uri: shown.photos[0].location }} />
        <HorizontalView style={{ padding: RFValue(10) }}>
          <VerticalView
            style={{
              alignSelf: "flex-end",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <Name1>{shown.name}</Name1>
            <Name1>{shown.instagram ? shown.instagram : ""}</Name1>
          </VerticalView>
          <Feather
            name="arrow-up-circle"
            size={35}
            color="white"
            style={{ alignSelf: "flex-end" }}
          />
        </HorizontalView>
      </Card>
      <Behind>
        <Photo source={{ uri: shown.photos[1].location }} />
        <HorizontalView style={{ padding: RFValue(10) }}>
          <VerticalView
            style={{
              alignSelf: "flex-end",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <Name1>{shown.name}</Name1>
            <Name1>{shown.instagram ? shown.instagram : ""}</Name1>
          </VerticalView>
          <Feather
            name="arrow-up-circle"
            size={35}
            color="white"
            style={{ alignSelf: "flex-end" }}
          />
        </HorizontalView>
      </Behind>
      <Footer1>
        <Buttons>
          <Text>1</Text>
        </Buttons>
        <Buttons>
          <Text>2</Text>
        </Buttons>
        <Buttons>
          <Text>3</Text>
        </Buttons>
      </Footer1> */}
    </Container>
  );
}

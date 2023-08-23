import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../../../styles/themes";
import { GlobalTitle } from "../../../Global/Title";
import { VerticalView } from "../../../Global/View/VerticalView";
import {
  ChatIcon,
  Chats,
  Container,
  LocationImage,
  LocationName,
  Map,
  Name,
  OpenChat,
  Person,
} from "./styles";
import { HorizontalView } from "../../../Global/View/HorizontalView";
import { useNavigation } from "@react-navigation/native";

export function Chat() {
  const navigation = useNavigation<any>();
  const CurrentChats = [
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: true,
    },
    {
      id: 3,
      active: false,
    },
    {
      id: 4,
      active: false,
    },
    {
      id: 5,
      active: false,
    },
    {
      id: 6,
      active: false,
    },
  ];
  return (
    <>
      <GlobalTitle
        title="Chat da Galera"
        background={`${Theme.color.secondary_40}`}
      />
      <Container>
        <Map
          data={CurrentChats}
          renderItem={({ item }) => (
            <Chats>
              <Person
                source={require("../../../../../assets/MyMatches/Person.png")}
              />
              <VerticalView
                style={{
                  marginLeft: RFValue(10),
                  justifyContent: "space-between",
                }}
              >
                <Name>Test</Name>
                <HorizontalView style={{ alignItems: "flex-end" }}>
                  <LocationImage
                    source={require("../../../../../assets/Event/Event1.png")}
                  />
                  <LocationName> {""}Nome do Evento</LocationName>
                </HorizontalView>
              </VerticalView>
              {item.active ? (
                <OpenChat
                  active={item.active}
                  onPress={() => navigation.navigate("Chat")}
                >
                  <ChatIcon
                    active={item.active}
                    source={require("../../../../../assets/MyMatches/Chat2.png")}
                  />
                </OpenChat>
              ) : (
                <OpenChat
                  active={item.active}
                  onPress={() => navigation.navigate("Chat")}
                >
                  <ChatIcon
                    active={item.active}
                    source={require("../../../../../assets/MyMatches/Chat1.png")}
                  />
                </OpenChat>
              )}
            </Chats>
          )}
        />
      </Container>
    </>
  );
}

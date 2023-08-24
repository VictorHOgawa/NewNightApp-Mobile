import { BackButton } from "../../Components/Global/Back";
import { VerticalView } from "../../Components/Global/View/VerticalView";
import Theme from "../../styles/themes";
import {
  Container,
  Header,
  Input,
  MainView,
  Map,
  Message,
  MessageBubble,
  MessageView,
  Name,
  Pic,
} from "./styles";

export function Chat() {
  const Messages = [
    {
      text: "Test",
      status: "sent",
    },
    {
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
      status: "sent",
    },
    {
      text: "Test",
      status: "sent",
    },
    {
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
      status: "received",
    },
    {
      text: "Test",
      status: "sent",
    },
    {
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
      status: "received",
    },
    {
      text: "Test",
      status: "sent",
    },
    {
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
      status: "received",
    },
  ];

  return (
    <Container>
      <Header>
        <BackButton style={{ position: "absolute", left: 0 }} />
        <VerticalView
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pic source={require("../../../assets/MyMatches/Person.png")} />
          <Name>Name</Name>
        </VerticalView>
      </Header>
      <MainView>
        <MessageView>
          <Map
            data={Messages}
            renderItem={({ item }) => (
              <MessageBubble status={item.status}>
                <Message status={item.status}>{item.text}</Message>
              </MessageBubble>
            )}
          />
        </MessageView>

        <Input
          placeholder="Digite uma mensagem..."
          placeholderTextColor={`${Theme.color.gray_70}`}
        />
      </MainView>
    </Container>
  );
}

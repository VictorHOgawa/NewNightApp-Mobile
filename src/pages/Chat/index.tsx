import { BackButton } from "../../Components/Global/Back";
import { VerticalView } from "../../Components/Global/View/VerticalView";
import Theme from "../../styles/themes";
import {
  Container,
  Header,
  Input,
  MainView,
  Message,
  MessageBubble,
  Name,
  Pic,
} from "./styles";

export function Chat() {
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
        <MessageBubble status="sent">
          <Message status="sent">Test</Message>
        </MessageBubble>
        <MessageBubble status="received">
          <Message status="received">test</Message>
        </MessageBubble>
        <MessageBubble status="received">
          <Message status="received">test</Message>
        </MessageBubble>
        <MessageBubble status="received">
          <Message status="received">test</Message>
        </MessageBubble>
        <MessageBubble status="sent">
          <Message status="sent">
            Test Test Test Test Test Test Test Test Test Test Test Test Test
            Test Test Test Test Test Test Test Test Test Test Test Test Test
            Test Test Test Test Test Test Test Test Test Test Test Test Test
            Test Test{" "}
          </Message>
        </MessageBubble>
        <Input
          placeholder="Digite uma mensagem..."
          placeholderTextColor={`${Theme.color.gray_70}`}
        />
      </MainView>
    </Container>
  );
}

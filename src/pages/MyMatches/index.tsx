import { Header } from "../../Components/Global/Header";
import { Chat } from "../../Components/Pages/MyMatches/Chat";
import { Crew } from "../../Components/Pages/MyMatches/Crew";
import { Matched } from "../../Components/Pages/MyMatches/Matched";
import { Container, Logo, MainView } from "./styles";

export function MyMatches() {
  return (
    <Container>
      <Logo source={require("../../../assets/Global/Logo2.png")} />
      <MainView>
        <Matched />
        <Crew />
        <Chat />
      </MainView>
    </Container>
  );
}

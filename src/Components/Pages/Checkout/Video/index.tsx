import { Container, Icon, Text } from "./styles";

export function Video() {
  return (
    <Container>
      <Icon
        source={require("../../../../../assets/Global/Icons/youtubeIcon.png")}
      />
      <Text> Dúvidas? Veja esse Rápido Vídeo</Text>
    </Container>
  );
}

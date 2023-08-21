import { Container, Icon } from "./styles";

export function More({ ...rest }) {
  return (
    <Container {...rest}>
      <Icon source={require("../../../../assets/Global/Plus.png")} />
    </Container>
  );
}

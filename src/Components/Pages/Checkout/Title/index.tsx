import { Tabs } from "../../../Global/Tabs";
import { HorizontalView } from "../../../Global/View/HorizontalView";
import { Container, Text } from "./styles";

export function Title() {
  return (
    <Container>
      <Text>CHECKOUT</Text>
      <HorizontalView style={{ justifyContent: "space-between", width: "90%" }}>
        <Tabs active={true} />
        <Tabs active={true} />
        <Tabs active={true} />
      </HorizontalView>
    </Container>
  );
}

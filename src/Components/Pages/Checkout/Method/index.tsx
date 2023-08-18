import { Button, Container, Icon, Text } from "./styles";

interface MethodProps {
  selected: string;
  setSelected: any;
}
export function Method({ selected, setSelected }: MethodProps) {
  return (
    <Container>
      <Button
        onPress={() => setSelected("Pix")}
        selected={selected === "Pix" ? true : false}
      >
        <Icon source={require("../../../../../assets/Checkout/Pix.png")} />
        <Text>PIX</Text>
      </Button>
      <Button
        onPress={() => setSelected("Card")}
        selected={selected === "Card" ? true : false}
      >
        <Icon source={require("../../../../../assets/Checkout/Cards.png")} />
        <Text>Cartão</Text>
      </Button>
    </Container>
  );
}

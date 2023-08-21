import { useNavigation } from "@react-navigation/native";
import { Btn, Container, Img } from "./styles";

export function Purchased() {
  const navigation = useNavigation<any>();
  return (
    <Container>
      <Btn onPress={() => navigation.navigate("Tickets")}>
        <Img source={require("../../../../../assets/Purchased/Tickets.png")} />
      </Btn>
      <Btn onPress={() => navigation.navigate("Products")}>
        <Img source={require("../../../../../assets/Purchased/Products.png")} />
      </Btn>
    </Container>
  );
}

import { useNavigation } from "@react-navigation/native";
import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { Btn, Container, Img } from "./styles";

export function Purchased() {
  const navigation = useNavigation<any>();
  const list = [
    {
      location: "../../../assets/Purchased/Tickets.png",
      onPress: () => navigation.navigate("Tickets"),
    },
    {
      location: "../../../assets/Purchased/Products.png",
      onPress: () => navigation.navigate("Products"),
    },
    {
      location: "../../../assets/Purchased/Suggestions.png",
      onPress: () => navigation.navigate("Suggestions"),
    },
    {
      location: "../../../assets/Purchased/VIP.png",
      onPress: () => navigation.navigate("vip"),
    },
  ];
  return (
    <Container>
      <Header />
      <Ad />
      <HorizontalView
        style={{
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Btn onPress={() => navigation.navigate("Tickets")}>
          <Img source={require("../../../assets/Purchased/Tickets.png")} />
        </Btn>
        <Btn onPress={() => navigation.navigate("Products")}>
          <Img source={require("../../../assets/Purchased/Products.png")} />
        </Btn>
        <Btn onPress={() => navigation.navigate("Suggestions")}>
          <Img source={require("../../../assets/Purchased/Suggestions.png")} />
        </Btn>
        <Btn onPress={() => navigation.navigate("vip")}>
          <Img source={require("../../../assets/Purchased/VIP.png")} />
        </Btn>
      </HorizontalView>
    </Container>
  );
}

import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AdList, Container } from "./styles";

export function Ad() {
  const Ads = [
    {
      image: require("../../../../assets/Global/2.png"),
    },
    {
      image: require("../../../../assets/Global/3.png"),
    },
    {
      image: require("../../../../assets/Global/4.png"),
    },
    {
      image: require("../../../../assets/Global/5.png"),
    },
    {
      image: require("../../../../assets/Global/6.png"),
    },
    {
      image: require("../../../../assets/Global/7.png"),
    },
  ];
  return (
    <View style={{ width: "100%", height: RFValue(120) }}>
      <AdList
        horizontal
        data={Ads}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Container source={item.image} />}
      />
    </View>
  );
}

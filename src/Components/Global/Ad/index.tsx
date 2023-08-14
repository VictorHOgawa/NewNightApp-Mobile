import { View } from "react-native";
import { AdList, Container } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

export function Ad() {
  return (
    <View style={{ width: "100%", height: RFValue(120) }}>
      <AdList
        horizontal
        data={[1, 2, 3]}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Container source={require("../../../../assets/Global/Ad.png")} />
        )}
      />
    </View>
  );
}

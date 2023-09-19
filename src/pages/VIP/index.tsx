import { Button } from "../../Components/Global/Button";
import Theme from "../../styles/themes";
import { Container } from "./styles";
import { Image, Linking } from "react-native";

export function VIP() {
  const handlePress = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <Container>
      <Image
        source={require("../../../assets/NightShop.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <Button
        title="Instagram"
        background={Theme.color.secondary_100}
        color={Theme.color.gray_10}
        width={180}
        height={40}
        fontSize={18}
        onPress={() => handlePress("https://instagram.com/nightapp_")}
        style={{ zIndex: 20, position: "absolute", bottom: "12%" }}
      />
    </Container>
  );
}

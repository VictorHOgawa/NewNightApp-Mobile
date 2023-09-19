import { Image, Linking } from "react-native";
import { Ad } from "../../Components/Global/Ad";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { Container, Logo } from "./styles";
import { Button } from "../../Components/Global/Button";
import Theme from "../../styles/themes";

export function Shop() {
  const handlePress = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <Container>
      {/* <LoadingFull />
      <Logo source={require("../../../assets/Global/Logo2.png")} />
      <Ad /> */}
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

import { useEffect, useState } from "react";
import { LoginValidation } from "../../Components/Global/Login";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { Chat } from "../../Components/Pages/MyMatches/Chat";
import { Crew } from "../../Components/Pages/MyMatches/Crew";
import { Matched } from "../../Components/Pages/MyMatches/Matched";
import { loginVerifyAPI } from "../../utils/api";
import { Container, Logo, MainView } from "./styles";
import { Image, Linking } from "react-native";
import { Button } from "../../Components/Global/Button";
import Theme from "../../styles/themes";
import { useNavigation } from "@react-navigation/native";

export function MyMatches() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      setLogged(true);
    }
    return setLoading(false);
  }

  useEffect(() => {
    handleVerify();
  }, []);

  const handlePress = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <Container>
      {/* {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Logo source={require("../../../assets/Global/Logo2.png")} />
          {logged ? (
            <>
              <MainView>
                <Matched />
                <Crew />
                <Chat />
              </MainView>
            </>
          ) : (
            <LoginValidation />
          )}
        </>
      )} */}
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
      <Button
        title="Voltar"
        background={Theme.color.confirmation}
        color={Theme.color.background}
        width={80}
        height={40}
        fontSize={18}
        onPress={() => navigation.goBack()}
        style={{ zIndex: 20, position: "absolute", bottom: 0 }}
      />
    </Container>
  );
}

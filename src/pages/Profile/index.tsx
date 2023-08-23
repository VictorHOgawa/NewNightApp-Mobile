import { useNavigation } from "@react-navigation/native";
import { Button } from "../../Components/Global/Button";
import { Header } from "../../Components/Global/Header";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import Theme from "../../styles/themes";
import { Container, Logo } from "./styles";
import { LineBreak } from "../../Components/Global/LineBreak";
import { GlobalTitle } from "../../Components/Global/Title";
import { Info } from "../../Components/Pages/Profile/Info";
import { RFValue } from "react-native-responsive-fontsize";

export function Profile() {
  const navigation = useNavigation<any>();
  return (
    <Container
      contentContainerStyle={{ flexGrow: 1, paddingBottom: RFValue(80) }}
    >
      <Logo source={require("../../../assets/Global/Logo2.png")} />

      <HorizontalView style={{ justifyContent: "space-around" }}>
        <Button
          title="Entrar"
          background={`${Theme.color.primary_80}`}
          color={`${Theme.color.gray_10}`}
          width={150}
          height={50}
          fontSize={18}
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Se Cadastrar"
          background={`${Theme.color.primary_80}`}
          color={`${Theme.color.gray_10}`}
          width={150}
          height={50}
          fontSize={18}
          onPress={() => navigation.navigate("Register")}
        />
      </HorizontalView>
      <LineBreak />
      <Info />
    </Container>
  );
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Theme from "../../../../styles/themes";
import { Button } from "../../../Global/Button";
import { GlobalTitle } from "../../../Global/Title";
import { Container, NightPremium } from "./styles";

export function Info() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();

  async function logOut() {
    setLoading(true);
    await AsyncStorage.removeItem("@nightapp:userToken");
    await AsyncStorage.removeItem("@nightapp:userRefreshToken");
    navigation.replace("AppRoutes", { screen: "Home" });
    return setLoading(false);
  }

  return (
    <Container>
      <GlobalTitle title="Informações" />
      <NightPremium
        source={require("../../../../../assets/Global/Premium.png")}
      />
      <Button
        title="Dados de Cadastro"
        background={`${Theme.color.primary_40}`}
        color={`${Theme.color.gray_10}`}
        width={310}
        height={30}
      />
      <Button
        title="Tutorial, Políticas, Termos e FAQ"
        background={`${Theme.color.primary_40}`}
        color={`${Theme.color.gray_10}`}
        width={310}
        height={30}
      />
      <Button
        title="Jobs na Night"
        background={`${Theme.color.primary_40}`}
        color={`${Theme.color.gray_10}`}
        width={310}
        height={30}
        onPress={() => navigation.navigate("Jobs")}
      />
      <Button
        title="Sair"
        background={`${Theme.color.primary_40}`}
        color={`${Theme.color.gray_10}`}
        width={310}
        height={30}
        onPress={logOut}
        loading={loading}
      />
    </Container>
  );
}

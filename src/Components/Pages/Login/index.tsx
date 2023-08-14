import { useNavigation } from "@react-navigation/native";
import Theme from "../../../styles/themes";
import { PostAPI } from "../../../utils/api";
import { Button } from "../../Global/Button";
import { InputForm } from "../../Global/Forms/FormInput";
import { Container, Remember, Title } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

export function Form() {
  const navigation = useNavigation<any>();
  const { control, handleSubmit } = useForm();
  async function handleLogin() {
    const connect = await PostAPI("/user/login", {});
  }
  return (
    <Container>
      <InputForm
        control={control}
        name="cpfCnpj"
        placeholder="CPF/CNPJ"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <InputForm
        control={control}
        name="password"
        placeholder="Senha"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Remember>
        <Title>Esqueci a Senha</Title>
      </Remember>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          title="Entrar"
          onPress={handleSubmit(handleLogin)}
          background={`${Theme.color.confirmation}`}
          color={`${Theme.color.background}`}
          width={120}
        />
        <Button
          title="Cadastro"
          onPress={() =>
            navigation.navigate("Register", screen ? { screen } : {})
          }
          background={`${Theme.color.primary_100}`}
          width={120}
        />
      </View>
    </Container>
  );
}

import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import Theme from "../../../styles/themes";
import { PostAPI } from "../../../utils/api";
import { storageToken } from "../../../utils/tokenManagement";
import { Button } from "../../Global/Button";
import { InputForm } from "../../Global/Forms/FormInput";
import { Container, Remember, Title } from "./styles";

export function Form() {
  const navigation = useNavigation<any>();
  const { control, handleSubmit } = useForm();
  async function handleLogin(formData: any) {
    const connect = await PostAPI("/user/login", formData);
    if (connect.status !== 200) {
      return Alert.alert(connect.body);
    }
    await storageToken(connect.body);
    return navigation.navigate("Home");
  }

  return (
    <Container>
      <InputForm
        control={control}
        name="cpfCnpj"
        placeholder="CPF/CNPJ"
        autoCapitalize="none"
        autoCorrect={false}
        style={{ borderBottomColor: Theme.color.gray_70, borderBottomWidth: 1 }}
      />
      <InputForm
        control={control}
        name="password"
        placeholder="Senha"
        autoCapitalize="none"
        autoCorrect={false}
        passwordContainerStyle={{
          borderBottomColor: Theme.color.gray_70,
          borderBottomWidth: 1,
        }}
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
            navigation.navigate("Register" /* , screen ? { screen } : {} */)
          }
          background={`${Theme.color.primary_100}`}
          width={120}
        />
      </View>
    </Container>
  );
}

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import Theme from "../../../styles/themes";
import { PostAPI } from "../../../utils/api";
import { storageToken } from "../../../utils/tokenManagement";
import { Button } from "../../Global/Button";
import { InputForm } from "../../Global/Forms/FormInput";
import { Container, FormContainer, Label } from "./styles";

export function Form() {
  const navigation = useNavigation<any>();
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  async function handleRegister(formData: any) {
    setLoading(true);
    const connect = await PostAPI("/user/register", formData);
    if (connect.status !== 200) {
      Alert.alert(connect.body);
      return setLoading(false);
    }
    await storageToken(connect.body);
    navigation.replace("AppRoutes", { screen: "Home" });
    return setLoading(false);
  }
  return (
    <Container>
      <FormContainer>
        <Label>Nome</Label>
        <InputForm
          name="name"
          control={control}
          placeholder="Nome"
          autoCapitalize="words"
          autoCorrect={false}
          style={{
            borderBottomColor: Theme.color.gray_70,
            borderBottomWidth: 1,
          }}
        />
        <Label>CPF</Label>
        <InputForm
          name="cpfCnpj"
          control={control}
          placeholder="CPF ou CNPJ"
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            borderBottomColor: Theme.color.gray_70,
            borderBottomWidth: 1,
          }}
        />
        <Label>Número Aqui</Label>
        <InputForm
          name="mobilePhone"
          control={control}
          placeholder="Telefone"
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            borderBottomColor: Theme.color.gray_70,
            borderBottomWidth: 1,
          }}
        />
        <Label>Senha</Label>
        <InputForm
          name="password"
          control={control}
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          passwordContainerStyle={{
            borderBottomColor: Theme.color.gray_70,
            borderBottomWidth: 1,
          }}
        />
        <Label>Repita a Senha</Label>
        <InputForm
          name="password2"
          control={control}
          placeholder="Repita a senha"
          autoCapitalize="none"
          autoCorrect={false}
          passwordContainerStyle={{
            borderBottomColor: Theme.color.gray_70,
            borderBottomWidth: 1,
          }}
        />
        <Button
          title="Cadastrar"
          onPress={handleSubmit(handleRegister)}
          background={`${Theme.color.primary_100}`}
          color={`${Theme.color.background}`}
          loading={loading}
        />
      </FormContainer>
    </Container>
  );
}

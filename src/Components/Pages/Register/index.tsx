import { useNavigation } from "@react-navigation/native";
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

  async function handleRegister(formData: any) {
    const connect = await PostAPI("/user/register", formData);
    console.log(connect);
    if (connect.status !== 200) {
      return Alert.alert(connect.body);
    }
    await storageToken(connect.body);
    return navigation.navigate("Home");
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
        />
        <Label>CPF</Label>
        <InputForm
          name="cpfCnpj"
          control={control}
          placeholder="CPF ou CNPJ"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Label>Número Aqui</Label>
        <InputForm
          name="mobilePhone"
          control={control}
          placeholder="Telefone"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Label>Senha</Label>
        <InputForm
          name="password"
          control={control}
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Label>Repita a Senha</Label>
        <InputForm
          name="password2"
          control={control}
          placeholder="Repita a senha"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button
          title="Cadastrar"
          onPress={handleSubmit(handleRegister)}
          background={`${Theme.color.primary_100}`}
          color={`${Theme.color.background}`}
        />
      </FormContainer>
    </Container>
  );
}

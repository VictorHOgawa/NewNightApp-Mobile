import { Controller, useForm } from "react-hook-form";
import Theme from "../../../styles/themes";
import { Container, FormContainer, Input, Label } from "./styles";
import { Button } from "../../Global/Button";
import { PostAPI } from "../../../utils/api";
import { InputForm } from "../../Global/Forms/FormInput";

export function Form() {
  const { control, handleSubmit } = useForm();

  async function handleRegister() {
    const connect = await PostAPI("/user/register", {});
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

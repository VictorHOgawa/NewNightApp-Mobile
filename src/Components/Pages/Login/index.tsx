import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import Theme from "../../../styles/themes";
import { PostAPI } from "../../../utils/api";
import { maskCpfCnpj } from "../../../utils/masks";
import { storageToken } from "../../../utils/tokenManagement";
import { Button } from "../../Global/Button";
import { InputForm } from "../../Global/Forms/FormInput";
import { Container, Remember, Title } from "./styles";

export function Form() {
  const navigation = useNavigation<any>();
  const { page } = useRoute().params as any;
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  async function handleLogin(formData: any) {
    setLoading(true);
    formData.cpfCnpj = maskCpfCnpj(formData.cpfCnpj);
    const connect = await PostAPI("/user/login", formData);
    if (connect.status !== 200) {
      Alert.alert(connect.body);
      return setLoading(false);
    }
    await storageToken(connect.body);
    if (page === "Checkout") {
      navigation.replace("Checkout");
      return setLoading1(false);
    }
    navigation.replace("AppRoutes", { screen: "Home" });
    return setLoading(false);
  }

  const handleRegister = () => {
    setLoading1(true);
    if (page === "Checkout") {
      navigation.replace("Register", { page: "Checkout" });
      return setLoading1(false);
    }
    navigation.replace("Register", { page: "Login" });
    return setLoading1(false);
  };

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
      <View style={{ justifyContent: "space-between" }}>
        <Button
          title="Entrar"
          onPress={handleSubmit(handleLogin)}
          background={`${Theme.color.confirmation}`}
          color={`${Theme.color.background}`}
          width={120}
          loading={loading}
        />
        <Button
          title="Cadastro"
          onPress={handleRegister}
          background={`${Theme.color.primary_100}`}
          width={120}
          loading={loading1}
        />
      </View>
    </Container>
  );
}

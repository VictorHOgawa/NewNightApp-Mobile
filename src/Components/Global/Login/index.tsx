import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Theme from "../../../styles/themes";
import { Button } from "../Button";
import { HorizontalView } from "../View/HorizontalView";

export function LoginValidation() {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    setLoading(true);
    navigation.navigate("Login", { page: "Home" });
    return setLoading(false);
  };

  const handleRegister = () => {
    setLoading1(true);
    navigation.navigate("Register", { page: "Home" });
    return setLoading1(false);
  };
  return (
    <>
      <HorizontalView style={{ justifyContent: "space-around" }}>
        <Button
          title="Entrar"
          background={`${Theme.color.primary_80}`}
          color={`${Theme.color.gray_10}`}
          width={150}
          height={50}
          fontSize={18}
          onPress={handleLogin}
          loading={loading}
        />
        <Button
          title="Se Cadastrar"
          background={`${Theme.color.primary_80}`}
          color={`${Theme.color.gray_10}`}
          width={150}
          height={50}
          fontSize={18}
          onPress={handleRegister}
          loading={loading1}
        />
      </HorizontalView>
    </>
  );
}

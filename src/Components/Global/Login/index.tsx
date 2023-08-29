import { useNavigation } from "@react-navigation/native";
import Theme from "../../../styles/themes";
import { Button } from "../Button";
import { HorizontalView } from "../View/HorizontalView";

export function LoginValidation() {
  const navigation = useNavigation<any>();
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
    </>
  );
}

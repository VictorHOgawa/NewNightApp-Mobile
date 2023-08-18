import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../../../../styles/themes";
import { Button } from "../../../../Global/Button";
import { LineBreak } from "../../../../Global/LineBreak";
import { GlobalTitle } from "../../../../Global/Title";
import { Video } from "../../Video";
import { Form } from "../styles";
import { Container, QrCodeImage, Text } from "./styles";

export function PixMethod() {
  const navigation = useNavigation<any>();
  const [QrCode, setQrCode] = useState(false);

  const handleClick = () => {
    setQrCode(true);
  };
  return (
    <Container>
      <GlobalTitle title="Código da Galera" />
      <Form
        placeholder="Insira o Melhor Código aqui"
        placeholderTextColor={`${Theme.color.gray_70}`}
        style={{ width: "90%", alignSelf: "center" }}
      />
      <Button
        title=""
        background={`${Theme.color.pix}`}
        color={`${Theme.color.gray_10}`}
        width={300}
        height={100}
        style={{
          flexDirection: "column",
        }}
        onPress={handleClick}
      >
        <LineBreak />
        <Text style={{ fontSize: RFValue(18) }}>Clique aqui para</Text>
        <Text style={{ fontWeight: "bold" }}>Gerar Pix Copia e Cola</Text>
      </Button>
      {QrCode ? (
        <>
          <QrCodeImage
            source={require("../../../../../../assets/Checkout/QrCode.png")}
          />
          <Button
            title="Finalizar"
            background={`${Theme.color.confirmation}`}
            color={`${Theme.color.gray_10}`}
            width={300}
            height={40}
            onPress={() => navigation.navigate("Purchased")}
          />
        </>
      ) : (
        <></>
      )}
      <Video />
    </Container>
  );
}

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
import { AuthPostAPI } from "../../../../../utils/api";
import { useCart } from "../../../../../context/cart";
import { ActivityIndicator, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
import { HorizontalView } from "../../../../Global/View/HorizontalView";

interface PixProps {
  coupon: string;
  setCoupon: any;
  AddCoupon: any;
  loadingCoupon: boolean;
  QrCode: boolean;
  setQrCode: any;
  pix: any;
  setPix: any;
}

export function PixMethod({
  coupon,
  setCoupon,
  AddCoupon,
  loadingCoupon,
  QrCode,
  setQrCode,
  pix,
  setPix,
}: PixProps) {
  const { cart } = useCart();
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  async function getPix() {
    const connect = await AuthPostAPI("/purchase/pix", {
      ...cart,
      coupon: coupon,
    });
    if (connect.status !== 200) {
      Alert.alert(connect.body);
      return setLoading1(false);
    }
    setPix(connect.body);
    return setLoading1(false);
  }

  const handleClick = () => {
    setQrCode(true);
    setLoading1(true);
    return getPix();
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(pix.payload);
  };

  const handleFinish = () => {
    setLoading(true);
    navigation.navigate("AppRoutes", {
      screen: "Purchased",
      params: { screen: "Purchased" },
    });
    return setLoading(false);
  };
  return (
    <Container>
      {}
      {QrCode ? (
        <></>
      ) : (
        <>
          <GlobalTitle title="Código da Galera" fontSize={15} />
          <HorizontalView
            style={{
              width: "90%",
              height: RFValue(50),
              padding: 0,
              marginLeft: "5%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Form
              placeholder="Insira o Melhor Código aqui"
              placeholderTextColor={`${Theme.color.gray_70}`}
              style={{
                width: "45%",
                height: RFValue(30),
                alignSelf: "center",
              }}
              value={coupon}
              onChangeText={setCoupon}
            />
            <Button
              title="Aplicar Código"
              height={RFValue(30)}
              background={Theme.color.confirmation}
              color={Theme.color.background}
              onPress={AddCoupon}
              loading={loadingCoupon}
            />
          </HorizontalView>
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
        </>
      )}
      {QrCode ? (
        <>
          {loading1 ? (
            <>
              <ActivityIndicator
                color={Theme.color.secondary_100}
                size="small"
                style={{ marginTop: "5%" }}
              />
            </>
          ) : (
            <>
              {pix ? (
                <>
                  <QrCodeImage
                    source={{
                      uri: `data:image/png;base64,${pix.encodedImage}`,
                    }}
                  />
                  <Button
                    title="Copiar Código"
                    background={Theme.color.pix}
                    width={300}
                    height={40}
                    onPress={handleCopy}
                  />
                  <Button
                    title="Finalizar"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.background}`}
                    width={300}
                    height={40}
                    onPress={handleFinish}
                    loading={loading}
                  />
                </>
              ) : (
                <>
                  <ActivityIndicator
                    color={Theme.color.secondary_100}
                    size="small"
                    style={{ marginTop: "5%" }}
                  />
                </>
              )}
            </>
          )}
        </>
      ) : (
        <></>
      )}
      <Video />
    </Container>
  );
}

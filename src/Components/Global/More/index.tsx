import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import Modal from "react-native-modal";
import Theme from "../../../styles/themes";
import { AuthPostAPI, getAPI } from "../../../utils/api";
import { BackButton } from "../Back";
import { Button } from "../Button";
import { LineBreak } from "../LineBreak";
import { GlobalTitle } from "../Title";
import { HorizontalView } from "../View/HorizontalView";
import { Container, Display, Icon, Input, ModalBody, Text } from "./styles";

interface MoreProps extends React.ComponentProps<typeof Container> {
  type?: string;
  handleClick?: any;
  portariaCode?: any;
  setPortariaCode?: any;
}

export function More({
  type,
  handleClick,
  portariaCode,
  setPortariaCode,
  ...rest
}: MoreProps) {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [step, setStep] = useState(1);
  const [promoter, setPromoter] = useState<any>();
  const [promoCode, setPromoCode] = useState("");
  const [code, setCode] = useState("");
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const handleOpen = () => {
    setSelected("1");
    setOpen1(true);
  };

  const handleOpen2 = () => {
    setSelected("2");
    setOpen2(true);
  };

  async function sendCode() {
    setLoading(true);
    const connect = await AuthPostAPI(`/user/${type}/${code}`, {});
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    navigation.replace(
      type === "ticket" ? "Tickets" : type === "product" ? "Products" : "Jobs"
    );
    return setLoading(false);
  }

  async function handleCourtesy() {
    setLoading1(true);
    const connect = await AuthPostAPI(`/user/courtesy/${code}`, {});
    if (connect.status !== 200) {
      Alert.alert(connect.body);
      return setLoading1(false);
    }
    navigation.replace(
      type === "ticket" ? "Tickets" : type === "product" ? "Products" : "Jobs"
    );
    return setLoading1(false);
  }

  async function handlePromoter() {
    setLoading2(true);
    const connect = await getAPI(`/promoter/${code}`);
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading2(false);
    }
    setPromoter(connect.body);
    setStep(2);
    return setLoading2(false);
  }

  async function handleSend() {
    setLoading3(true);
    const connect = await AuthPostAPI(`/user/promoter/${code}`, {
      code: promoCode,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading3(false);
    }
    navigation.replace("Promoter");
    return setLoading3(false);
  }

  return (
    <>
      {type === "ticket" || type === "product" ? (
        <>
          <Container {...rest} onPress={() => setOpen(true)}>
            <Icon source={require("../../../../assets/Global/Plus.png")} />
          </Container>
          <Modal
            isVisible={open}
            onModalHide={() => setOpen(false)}
            onBackButtonPress={() => setOpen(false)}
            onBackdropPress={() => setOpen(false)}
          >
            <ModalBody style={{ padding: 10, borderRadius: 10 }}>
              <HorizontalView style={{ justifyContent: "space-evenly" }}>
                <Button
                  title="Transferência"
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.secondary_100}`}
                  onPress={handleOpen}
                  width={100}
                  height={40}
                  fontSize={12}
                />
                {type === "ticket" ? (
                  <Button
                    title="Cortesia"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    onPress={handleOpen2}
                    width={100}
                    height={40}
                    fontSize={12}
                  />
                ) : (
                  <></>
                )}
              </HorizontalView>
              <Button
                title="Voltar"
                background={Theme.color.primary_80}
                color={Theme.color.gray_10}
                onPress={() => setOpen(false)}
                height={40}
              />
            </ModalBody>
          </Modal>
          {selected === "1" ? (
            <>
              <Modal
                isVisible={open1}
                onModalHide={() => setOpen1(false)}
                onBackButtonPress={() => setOpen1(false)}
                onBackdropPress={() => setOpen1(false)}
              >
                <ModalBody style={{ padding: 10, borderRadius: 10 }}>
                  <BackButton
                    onPress={() => setOpen1(false)}
                    style={{ marginTop: 10 }}
                  />
                  <GlobalTitle title="Insira o Código" />
                  <Input
                    placeholder="EX: Carol20"
                    placeholderTextColor={Theme.color.gray_10}
                    value={code}
                    onChangeText={(text) => setCode(text)}
                  />
                  <Button
                    title="Confirmar"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    onPress={sendCode}
                    height={40}
                    loading={loading}
                  />
                  <Button
                    title="Voltar"
                    background={Theme.color.primary_80}
                    color={Theme.color.gray_10}
                    onPress={() => setOpen1(false)}
                    height={40}
                  />
                </ModalBody>
              </Modal>
            </>
          ) : (
            <>
              <Modal
                isVisible={open2}
                onModalHide={() => setOpen2(false)}
                onBackButtonPress={() => setOpen2(false)}
                onBackdropPress={() => setOpen2(false)}
              >
                <ModalBody style={{ padding: 10, borderRadius: 10 }}>
                  <BackButton onPress={() => setOpen2(false)} />
                  <GlobalTitle title="Insira o Código" />
                  <Input
                    placeholder="EX: Carol20"
                    placeholderTextColor={Theme.color.gray_10}
                    value={code}
                    onChangeText={(text) => setCode(text)}
                  />
                  <Button
                    title="Confirmar"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    height={40}
                    onPress={handleCourtesy}
                    loading={loading1}
                  />
                  <Button
                    title="Voltar"
                    background={Theme.color.primary_80}
                    color={Theme.color.gray_10}
                    onPress={() => setOpen2(false)}
                    height={40}
                  />
                </ModalBody>
              </Modal>
            </>
          )}
        </>
      ) : type === "portaria" ? (
        <>
          <Container {...rest} onPress={() => setOpen3(true)}>
            <Icon source={require("../../../../assets/Global/Plus.png")} />
          </Container>
          <Modal
            isVisible={open3}
            onModalHide={() => setOpen3(false)}
            onBackButtonPress={() => setOpen3(false)}
            onBackdropPress={() => setOpen3(false)}
          >
            <ModalBody style={{ padding: 10, borderRadius: 10 }}>
              <BackButton onPress={() => setOpen3(false)} />
              <GlobalTitle title="Insira o Código" />
              <Input
                placeholder="EX: Carol20"
                placeholderTextColor={Theme.color.gray_10}
                value={portariaCode}
                onChangeText={(text) => setPortariaCode(text)}
              />
              <Button
                title="Confirmar"
                background={`${Theme.color.confirmation}`}
                color={`${Theme.color.secondary_100}`}
                onPress={handleClick}
                height={40}
              />
              <Button
                title="Voltar"
                background={Theme.color.primary_80}
                color={Theme.color.gray_10}
                onPress={() => setOpen3(false)}
                height={40}
              />
            </ModalBody>
          </Modal>
        </>
      ) : type === "promoter" ? (
        <>
          <Container {...rest} onPress={() => setOpen4(true)}>
            <Icon source={require("../../../../assets/Global/Plus.png")} />
          </Container>
          <Modal
            isVisible={open4}
            onModalHide={() => setOpen4(false)}
            onBackButtonPress={() => setOpen4(false)}
            onBackdropPress={() => setOpen4(false)}
          >
            <ModalBody style={{ padding: 10, borderRadius: 10 }}>
              {step === 1 ? (
                <>
                  <GlobalTitle
                    title="Código de Registro"
                    background={Theme.color.background}
                    color={Theme.color.gray_10}
                  />
                  <Input
                    placeholder="EX: Carol20"
                    placeholderTextColor={Theme.color.gray_10}
                    value={code}
                    onChangeText={(text) => setCode(text)}
                  />
                  <Button
                    title="Buscar"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    onPress={handlePromoter}
                    height={40}
                    loading={loading2}
                  />
                </>
              ) : (
                <>
                  <GlobalTitle
                    title="Benefício do Seu Cupom"
                    background={Theme.color.background}
                    color={Theme.color.gray_10}
                    fontSize={15}
                  />
                  <HorizontalView
                    style={{
                      justifyContent: "space-between",
                      marginTop: "2%",
                      alignItems: "center",
                    }}
                  >
                    <Text>Quantidade Disponível: </Text>
                    <Display>
                      <Text style={{ color: Theme.color.confirmation }}>
                        {promoter.promoter.coupon_quantity}
                      </Text>
                    </Display>
                  </HorizontalView>
                  <HorizontalView
                    style={{
                      justifyContent: "space-between",
                      marginTop: "2%",
                      alignItems: "center",
                    }}
                  >
                    <Text>Desconto Disponível: </Text>
                    <Display>
                      <Text style={{ color: Theme.color.confirmation }}>
                        {promoter.promoter.discount}
                      </Text>
                    </Display>
                  </HorizontalView>
                  <LineBreak />
                  <GlobalTitle
                    title="Insira o Código que Desejar"
                    background={Theme.color.background}
                    color={Theme.color.gray_10}
                    fontSize={15}
                  />
                  <Input
                    placeholder="EX: Carol20"
                    placeholderTextColor={Theme.color.gray_10}
                    value={promoCode}
                    onChangeText={(text) => setPromoCode(text)}
                  />
                  <Button
                    title="Salvar e Seguir"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    onPress={handleSend}
                    height={40}
                    loading={loading3}
                  />
                </>
              )}
              <Button
                title="Voltar"
                background={Theme.color.primary_80}
                color={Theme.color.gray_10}
                onPress={() => setOpen4(false)}
                height={40}
              />
            </ModalBody>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

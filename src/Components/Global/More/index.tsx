import { useState } from "react";
import { Modal } from "react-native";
import Theme from "../../../styles/themes";
import { BackButton } from "../Back";
import { Button } from "../Button";
import { GlobalTitle } from "../Title";
import { Container, Icon, Input, ModalBody } from "./styles";
import { AuthPostAPI } from "../../../utils/api";
import { useNavigation } from "@react-navigation/native";
import { HorizontalView } from "../View/HorizontalView";

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
  const [code, setCode] = useState("");
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      {type === "ticket" || type === "product" ? (
        <>
          <Container {...rest} onPress={() => setOpen(true)}>
            <Icon source={require("../../../../assets/Global/Plus.png")} />
          </Container>
          <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={() => setOpen(false)}
          >
            <ModalBody style={{ padding: 10, borderRadius: 10 }}>
              <HorizontalView style={{ justifyContent: "space-evenly" }}>
                <Button
                  title="1"
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.secondary_100}`}
                  onPress={handleOpen}
                  width={100}
                />
                <Button
                  title="2"
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.secondary_100}`}
                  onPress={handleOpen2}
                  width={100}
                />
              </HorizontalView>
              <Button
                title="Voltar"
                background={Theme.color.primary_80}
                color={Theme.color.gray_10}
                onPress={() => setOpen(false)}
              />
            </ModalBody>
          </Modal>
          {selected === "1" ? (
            <>
              <Modal
                animationType="slide"
                transparent={true}
                visible={open1}
                onRequestClose={() => setOpen1(false)}
              >
                <ModalBody style={{ padding: "5%" }}>
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
                    height={30}
                    loading={loading}
                  />
                </ModalBody>
              </Modal>
            </>
          ) : (
            <>
              <Modal
                animationType="slide"
                transparent={true}
                visible={open2}
                onRequestClose={() => setOpen2(false)}
              >
                <ModalBody style={{ padding: "5%" }}>
                  <BackButton onPress={() => setOpen2(false)} />
                  <GlobalTitle title="Insira o Código" />
                  <Input
                    placeholder="EX: Carol20"
                    placeholderTextColor={Theme.color.gray_10}
                  />
                  <Button
                    title="Confirmar"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    onPress={() => setOpen2(false)}
                    height={30}
                  />
                </ModalBody>
              </Modal>
            </>
          )}
        </>
      ) : (
        <>
          <Container {...rest} onPress={() => setOpen3(true)}>
            <Icon source={require("../../../../assets/Global/Plus.png")} />
          </Container>
          <Modal
            animationType="slide"
            transparent={true}
            visible={open3}
            onRequestClose={() => setOpen3(false)}
          >
            <ModalBody style={{ padding: "5%" }}>
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
                height={30}
              />
            </ModalBody>
          </Modal>
        </>
      )}
    </>
  );
}

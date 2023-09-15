import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import Theme from "../../../../styles/themes";
import { BackButton } from "../../../Global/Back";
import { Button } from "../../../Global/Button";
import { InputForm } from "../../../Global/Forms/FormInput";
import { Radio } from "../../../Global/Radio";
import { GlobalTitle } from "../../../Global/Title";
import { HorizontalView } from "../../../Global/View/HorizontalView";
import { VerticalView } from "../../../Global/View/VerticalView";
import { Logo, Top } from "../Register/styles";
import Modal from "react-native-modal";
import {
  AddPhoto,
  Container,
  Description,
  Icon,
  ModalBody,
  Models,
  Photos,
  Text,
} from "./styles";

interface FormProps {
  step: number;
  formData: any;
  setFormData: any;
  description: string;
  setDescription: any;
  open: boolean;
  setOpen: any;
  type: string;
  setType: any;
}
export function Form({
  step,
  formData,
  setFormData,
  description,
  setDescription,
  open,
  setOpen,
  type,
  setType,
}: FormProps) {
  const navigation = useNavigation<any>();
  const { control, handleSubmit } = useForm();
  const handleEmpty = () => {
    type === ""
      ? alert(
          "Selecione um Modelo de Descrição, ou Adicione uma Descrição própria"
        )
      : navigation.navigate("Match");
  };

  return (
    <Container>
      {step === 1 ? (
        <>
          <GlobalTitle title="Seu Nome é" />
          <InputForm
            control={control}
            name="name"
            placeholder="Nome Aqui..."
            autoCapitalize="words"
            autoCorrect={true}
            onChange={(e) =>
              setFormData({ ...formData, name: e.nativeEvent.text })
            }
          />
          <GlobalTitle title="Insira o Mesmo CPF de Cadastro" fontSize={15} />
          <InputForm
            control={control}
            name="cpfCnpj"
            placeholder="CPF"
            keyboardType="numeric"
            onChange={(e) =>
              setFormData({ ...formData, cpfCnpj: e.nativeEvent.text })
            }
          />
          <HorizontalView style={{ alignSelf: "center" }}>
            <VerticalView style={{ width: "40%" }}>
              <GlobalTitle title="Qual sua Idade" fontSize={15} />
              <InputForm
                control={control}
                name=""
                placeholder="Sua Idade"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                style={{
                  width: "90%",
                }}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.nativeEvent.text })
                }
              />
            </VerticalView>
            <VerticalView style={{ width: "40%" }}>
              <GlobalTitle title="E seu Instagram?" fontSize={15} />
              <InputForm
                control={control}
                name=""
                placeholder="@"
                style={{
                  width: "90%",
                }}
                onChange={(e) =>
                  setFormData({ ...formData, instagram: e.nativeEvent.text })
                }
              />
            </VerticalView>
          </HorizontalView>
        </>
      ) : step === 2 ? (
        <>
          <GlobalTitle title="Adicione suas Melhores Fotos" />
          <Photos>
            <AddPhoto>
              <Icon
                source={require("../../../../../assets/Match/addPhoto.png")}
              />
            </AddPhoto>
            <AddPhoto>
              <Icon
                source={require("../../../../../assets/Match/addPhoto.png")}
              />
            </AddPhoto>
            <AddPhoto>
              <Icon
                source={require("../../../../../assets/Match/addPhoto.png")}
              />
            </AddPhoto>
            <AddPhoto>
              <Icon
                source={require("../../../../../assets/Match/addPhoto.png")}
              />
            </AddPhoto>
            <AddPhoto>
              <Icon
                source={require("../../../../../assets/Match/addPhoto.png")}
              />
            </AddPhoto>
            <AddPhoto>
              <Icon
                source={require("../../../../../assets/Match/addPhoto.png")}
              />
            </AddPhoto>
          </Photos>
        </>
      ) : (
        <>
          <GlobalTitle title="Insira uma Breve Descrição" />
          <Description
            placeholder="Insira uma Breve Descrição"
            placeholderTextColor={Theme.color.gray_70}
            onChange={(e) => setDescription(e.nativeEvent.text)}
          />
          <Models onPress={() => setOpen(true)}>
            <Text>Modelos de Descrição, dá uma olhadinha!</Text>
          </Models>
          <Modal
            isVisible={open}
            onModalHide={() => setOpen(false)}
            onBackdropPress={() => setOpen(false)}
            onBackButtonPress={() => setOpen(false)}
          >
            <ModalBody style={{ padding: 10, borderRadius: 10 }}>
              <Top style={{ justifyContent: "center" }}>
                <BackButton onPress={() => setOpen(false)} />
                <Logo
                  source={require("../../../../../assets/Match/matchLogo.png")}
                />
              </Top>
              <VerticalView>
                <Button
                  title=""
                  background="transparent"
                  color={`${Theme.color.gray_10}`}
                  width={280}
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "space-between",
                    padding: 10,
                    alignItems: "center",
                    width: "100%",
                    marginTop: "5%",
                  }}
                  onPress={() => setType("first")}
                >
                  <Radio active={type === "first" ? true : false} />
                  <Text
                    style={{ fontSize: 10, textAlign: "center", width: "80%" }}
                  >
                    Sou mais caseiro(a), foi um milagre eu ter saído hoje, no
                    geral sou de boa.
                  </Text>
                </Button>
                <Button
                  title=""
                  background="transparent"
                  color={`${Theme.color.gray_10}`}
                  width={280}
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "space-between",
                    padding: 10,
                    alignItems: "center",
                    width: "100%",
                    marginTop: "5%",
                  }}
                  onPress={() => setType("second")}
                >
                  <Radio active={type === "second" ? true : false} />
                  <Text
                    style={{ fontSize: 10, textAlign: "center", width: "80%" }}
                  >
                    Gostos peculiares, não sei se você entenderia.
                  </Text>
                </Button>
                <Button
                  title=""
                  background="transparent"
                  color={`${Theme.color.gray_10}`}
                  width={280}
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "space-between",
                    padding: 10,
                    alignItems: "center",
                    width: "100%",
                    marginTop: "5%",
                  }}
                  onPress={() => setType("third")}
                >
                  <Radio active={type === "third" ? true : false} />
                  <Text
                    style={{ fontSize: 10, textAlign: "center", width: "80%" }}
                  >
                    Meu negócio é diversão, sorriso e alegria.
                  </Text>
                </Button>
                <Button
                  title=""
                  background="transparent"
                  color={`${Theme.color.gray_10}`}
                  width={280}
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "space-between",
                    padding: 10,
                    alignItems: "center",
                    width: "100%",
                    marginTop: "5%",
                  }}
                  onPress={() => setType("fourth")}
                >
                  <Radio active={type === "fourth" ? true : false} />
                  <Text
                    style={{ fontSize: 10, textAlign: "center", width: "80%" }}
                  >
                    Música, festa, amigos e muito beijo na boca é o que eu
                    gosto.
                  </Text>
                </Button>
              </VerticalView>
              <Button
                title="Salvar e Seguir"
                background={Theme.color.confirmation}
                color={Theme.color.background}
                width={280}
                onPress={handleEmpty}
              />
            </ModalBody>
          </Modal>
        </>
      )}
    </Container>
  );
}

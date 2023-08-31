import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import Theme from "../../../../styles/themes";
import { BackButton } from "../../../Global/Back";
import { Button } from "../../../Global/Button";
import { LineBreak } from "../../../Global/LineBreak";
import { Tabs } from "../../../Global/Tabs";
import { HorizontalView } from "../../../Global/View/HorizontalView";
import { Form } from "../Form";
import { Container, Download, Logo, Text, Top } from "./styles";

export function Register() {
  const navigation = useNavigation<any>();
  const [step, setStep] = useState(1);
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    cpfCnpj: "",
    age: "",
    instagram: "",
    photos: [
      {
        location: "",
      },
    ],
  });

  const handleSteps = () => {
    if (
      step === 1 &&
      formData.name === "" &&
      formData.cpfCnpj === "" &&
      formData.age === "" &&
      formData.instagram === ""
    ) {
      return Alert.alert("Preencha o formulário");
    }
    if (
      (step === 1 && formData.name === "") ||
      formData.cpfCnpj === "" ||
      formData.age === "" ||
      formData.instagram === ""
    ) {
      return Alert.alert("Finalize o preenchimento do Formulário");
    }
    if (
      step === 1 &&
      formData.name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.age !== "" &&
      formData.instagram !== ""
    ) {
      setStep(2);
    }
    if (step === 2) {
      setStep(3);
    }
    if (step === 3 && description === "") {
      Alert.alert("Adicione uma Descrição, ou selecione um Modelo já pronto");
    }
    if (step === 3 && description !== "") {
      navigation.navigate("Match");
    }
  };

  const handleBack = () => {
    step === 1
      ? navigation.goBack()
      : step !== 1 && step !== 3
      ? setStep(step - 1)
      : step === 3 && !open
      ? setStep(step - 1)
      : open
      ? setOpen(false)
      : null;
  };

  return (
    <Container style={{ marginTop: "30%" }}>
      <Top>
        <BackButton
          style={{ height: 50, marginTop: 0, marginLeft: -50 }}
          onPress={handleBack}
        />
        <Logo source={require("../../../../../assets/Match/matchLogo.png")} />
      </Top>
      <HorizontalView style={{ justifyContent: "space-between", width: "90%" }}>
        {step === 1 ? (
          <>
            <Tabs
              style={{ backgroundColor: Theme.color.primary_60 }}
              active={true}
            />
            <Tabs active={false} />
            <Tabs active={false} />
          </>
        ) : step === 2 ? (
          <>
            <Tabs
              style={{ backgroundColor: Theme.color.primary_60 }}
              active={true}
            />
            <Tabs
              style={{ backgroundColor: Theme.color.primary_60 }}
              active={true}
            />
            <Tabs active={false} />
          </>
        ) : (
          <>
            <Tabs
              style={{ backgroundColor: Theme.color.primary_60 }}
              active={true}
            />
            <Tabs
              style={{ backgroundColor: Theme.color.primary_60 }}
              active={true}
            />
            <Tabs
              style={{ backgroundColor: Theme.color.primary_60 }}
              active={true}
            />
          </>
        )}
      </HorizontalView>
      <Form
        step={step}
        formData={formData}
        setFormData={setFormData}
        description={description}
        setDescription={setDescription}
        open={open}
        setOpen={setOpen}
        type={type}
        setType={setType}
      />
      <Button
        title={
          step === 1
            ? "Salvar e Seguir"
            : step === 2
            ? "Próximo"
            : "Salvar e Seguir"
        }
        background={Theme.color.confirmation}
        color={Theme.color.background}
        width={250}
        height={40}
        onPress={handleSteps}
      />

      {step === 2 ? (
        <Download style={{ marginTop: "2%" }}>
          <Text>Para uma Experiência Melhor, Baixe o App da Night</Text>
        </Download>
      ) : (
        <></>
      )}
      <LineBreak />
    </Container>
  );
}

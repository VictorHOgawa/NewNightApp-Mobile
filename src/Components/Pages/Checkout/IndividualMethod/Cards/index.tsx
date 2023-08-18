import { useNavigation } from "@react-navigation/native";
import Theme from "../../../../../styles/themes";
import { Button } from "../../../../Global/Button";
import { Radio } from "../../../../Global/Radio";
import { GlobalTitle } from "../../../../Global/Title";
import { HorizontalView } from "../../../../Global/View/HorizontalView";
import { Container } from "../styles";
import { Installments } from "./Installments";
import { NewCard } from "./NewCard";
import { Form, Icon, Text } from "./styles";
import { useState } from "react";

export function CardMethod() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState("");
  const [newCard, setNewCard] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [installments, setInstallments] = useState(false);

  const [formData, setFormData] = useState({
    holderName: "",
    number: "",
    expiryDate: "",
    ccv: "",
    name: "",
    cpfCnpj: "",
    postalCode: "",
    addressNumber: "",
  });

  console.log("formData :", formData);
  console.log("selected :", selected);
  console.log("newCard :", newCard);
  console.log("stepTwo :", stepTwo);
  console.log("installments :", installments);

  function handleBack() {
    if (installments && !newCard && !stepTwo) {
      return setInstallments(false);
    }
    if (newCard && !stepTwo) {
      return setNewCard(false);
    }
    if (stepTwo && !installments) {
      return setStepTwo(false);
    }
    if (stepTwo && installments) {
      setNewCard(true);
      setInstallments(false);
    }
  }
  function handleNext() {
    if (selected === "") {
      return alert("Selecione um Cartão");
    }
    if (selected !== "New") {
      return setInstallments(true);
    }
    if (selected === "New" && !newCard && !installments) {
      return setNewCard(true);
    }
    if (
      selected === "New" &&
      newCard === true &&
      !stepTwo &&
      formData.holderName !== "" &&
      formData.number !== "" &&
      formData.expiryDate !== "" &&
      formData.ccv !== ""
    ) {
      return setStepTwo(true);
    }
    if (
      selected === "New" &&
      stepTwo &&
      !installments &&
      newCard === true &&
      formData.holderName !== "" &&
      formData.number !== "" &&
      formData.expiryDate !== "" &&
      formData.ccv !== "" &&
      formData.name !== "" &&
      formData.cpfCnpj !== "" &&
      formData.postalCode !== "" &&
      formData.addressNumber !== ""
    ) {
      {
        setInstallments(true);
        setNewCard(false);
      }
    }
    if (!newCard && installments) {
      return navigation.navigate("Purchased");
    }
  }
  return (
    <Container>
      {newCard ? (
        <>
          <NewCard
            formData={formData}
            setFormData={setFormData}
            stepTwo={stepTwo}
          />
        </>
      ) : installments ? (
        <Installments formData={formData} />
      ) : (
        <>
          <Button
            title=""
            background={`${Theme.color.secondary_80}`}
            color={`${Theme.color.gray_10}`}
            width={300}
            style={{
              alignSelf: "center",
              justifyContent: "space-evenly",
              padding: 10,
              alignItems: "center",
            }}
            onPress={() => setSelected("New")}
          >
            <Radio active={selected === "New" ? true : false} />
            <Icon
              source={require("../../../../../../assets/Checkout/Add.png")}
            />
            <Text>Inserir dados de um Cartão</Text>
          </Button>
          <GlobalTitle title="Código da Galera" />
          <Form
            placeholder="Insira o Melhor Código aqui"
            placeholderTextColor={`${Theme.color.gray_70}`}
            style={{ width: "90%", alignSelf: "center" }}
          />
        </>
      )}

      <HorizontalView
        style={{
          alignSelf: "center",
          justifyContent: "space-evenly",
          width: "90%",
        }}
      >
        <Button
          title="Voltar"
          background={`${Theme.color.secondary_60}`}
          color={`${Theme.color.gray_10}`}
          width={150}
          disabled={newCard || installments ? false : true}
          onPress={() => handleBack()}
        />
        <Button
          title={
            installments
              ? "Finalizar"
              : selected === "New"
              ? "Continuar"
              : "Pagamento"
          }
          background={`${Theme.color.next}`}
          color={`${Theme.color.gray_10}`}
          width={150}
          onPress={() => handleNext()}
        />
      </HorizontalView>
    </Container>
  );
}

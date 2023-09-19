import { useNavigation } from "@react-navigation/native";
import Theme from "../../../../../styles/themes";
import { Button } from "../../../../Global/Button";
import { Radio } from "../../../../Global/Radio";
import { GlobalTitle } from "../../../../Global/Title";
import { HorizontalView } from "../../../../Global/View/HorizontalView";
import { Container } from "../styles";
import { Installments } from "./Installments";
import { NewCard } from "./NewCard";
import { Form, Icon, Map, Text } from "./styles";
import { useEffect, useState } from "react";
import { useCart } from "../../../../../context/cart";
import { AuthPostAPI, authGetAPI } from "../../../../../utils/api";
import { ActivityIndicator, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { RFValue } from "react-native-responsive-fontsize";
import {
  CreditCardHolderValidation,
  CreditCardValidation,
} from "../../../../../utils/fieldValidation";

interface CardProps {
  coupon: string;
  setCoupon: any;
  AddCoupon: any;
  loadingCoupon: boolean;
}

export function CardMethod({
  coupon,
  setCoupon,
  AddCoupon,
  loadingCoupon,
}: CardProps) {
  const { cart } = useCart();
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState("");
  const [newCard, setNewCard] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [installments, setInstallments] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingCards, setLoadingCards] = useState(false);
  const { control, handleSubmit } = useForm();
  const [cards, setCards] = useState<any>([]);
  const [formData, setFormData] = useState({
    holderName: "",
    number: "",
    expiryDate: "",
    ccv: "",
    name: "",
    email: "",
    mobilePhone: "",
    cpfCnpj: "",
    postalCode: "",
    addressNumber: "",
  });

  const [installmentCount, setInstallmentCount] = useState(1);

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
  function handleNext(formData: any) {
    if (selected === "") {
      return alert("Selecione um Cartão");
    }
    if (selected !== "New" && !installments) {
      return setInstallments(true);
    }
    if (selected === "New" && !newCard && !installments) {
      return setNewCard(true);
    }
    if (
      selected === "New" &&
      newCard === true &&
      !stepTwo &&
      CreditCardValidation(formData) === "ok"
    ) {
      return setStepTwo(true);
    }
    if (
      selected === "New" &&
      stepTwo &&
      !installments &&
      newCard === true &&
      CreditCardHolderValidation(formData) === "ok"
    ) {
      {
        setInstallments(true);
        setNewCard(false);
      }
    }
    if (!newCard && installments && selected !== "New") {
      sendExistingCard();
    }
    if (!newCard && installments && selected === "New") {
      sendNewCard(formData);
    }
  }

  async function sendNewCard(formData: any) {
    const creditCard = {
      holderName: formData.holderName,
      number: formData.number,
      expiryMonth: formData.expiryDate.split("/")[0],
      expiryYear: formData.expiryDate.split("/")[1],
      ccv: formData.ccv,
    };

    const creditCardHolderInfo = {
      name: formData.name,
      email: formData.email,
      mobilePhone: formData.mobilePhone,
      cpfCnpj: formData.cpfCnpj,
      postalCode: formData.postalCode,
      addressNumber: formData.addressNumber,
    };
    setLoading(true);
    const connect = await AuthPostAPI("/purchase/credit", {
      ...cart,
      creditCard,
      creditCardHolderInfo,
      installmentCount,
      coupon: "",
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    Alert.alert("Compra Efetuada com Sucesso!");
    navigation.navigate("AppRoutes", {
      screen: "Purchased",
      params: { screen: "Purchased" },
    });
    return setLoading(false);
  }

  async function sendExistingCard() {
    setLoading(true);
    const connect = await AuthPostAPI(`/purchase/credit/${selected}`, {
      ...cart,
      coupon: "",
      installmentCount,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    Alert.alert("Compra Efetuada com Sucesso!");
    navigation.navigate("AppRoutes", {
      screen: "Purchased",
      params: { screen: "Purchased" },
    });
    return setLoading(false);
  }

  async function getCards() {
    setLoadingCards(true);
    const connect = await authGetAPI("/user/credit-card");
    if (connect.status !== 200) {
      return;
    }
    setCards(connect.body.creditCard);
    return setLoadingCards(false);
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <Container>
      <GlobalTitle title="Código da Galera" />
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
      {newCard ? (
        <>
          <NewCard
            control={control}
            formData={formData}
            setFormData={setFormData}
            stepTwo={stepTwo}
          />
        </>
      ) : installments ? (
        <Installments
          formData={formData}
          installmentCount={installmentCount}
          setInstallmentCount={setInstallmentCount}
          selected={selected}
        />
      ) : (
        <>
          {!cards ? (
            <></>
          ) : (
            <>
              {loadingCards ? (
                <ActivityIndicator
                  size="small"
                  color={Theme.color.primary_80}
                />
              ) : (
                <>
                  <Map
                    data={cards}
                    renderItem={({ item }: any) => (
                      <Button
                        title=""
                        background={`${Theme.color.secondary_80}`}
                        color={`${Theme.color.gray_10}`}
                        width={300}
                        style={{
                          alignSelf: "center",
                          justifyContent: "flex-start",
                          padding: 10,
                          alignItems: "center",
                        }}
                        onPress={() => setSelected(item.id)}
                      >
                        <>
                          <Radio active={selected === item.id ? true : false} />
                          {item.creditCardBrand === "AMEX" ? (
                            <Icon
                              style={{ width: RFValue(35), marginLeft: "2%" }}
                              source={require("../../../../../../assets/Global/Icons/AECard.png")}
                            />
                          ) : item.creditCardBrand === "MASTERCARD" ? (
                            <Icon
                              style={{ width: RFValue(35), marginLeft: "2%" }}
                              source={require("../../../../../../assets/Global/Icons/MasterCard.png")}
                            />
                          ) : item.creditCardBrand === "VISA" ? (
                            <Icon
                              style={{ width: RFValue(35), marginLeft: "2%" }}
                              source={require("../../../../../../assets/Global/Icons/VisaCard.png")}
                            />
                          ) : (
                            <></>
                          )}
                          <Text>
                            {""} {item.creditCardBrand} ****{" "}
                            {item.creditCardNumber}
                          </Text>
                        </>
                      </Button>
                    )}
                  />
                </>
              )}
            </>
          )}
          <Button
            title=""
            background={`${Theme.color.secondary_80}`}
            color={`${Theme.color.gray_10}`}
            width={300}
            style={{
              alignSelf: "center",
              justifyContent: "flex-start",
              padding: 10,
              alignItems: "center",
            }}
            onPress={() => setSelected("New")}
          >
            <Radio active={selected === "New" ? true : false} />
            <Text>{""} </Text>
            <Icon
              source={require("../../../../../../assets/Checkout/Add.png")}
            />
            <Text>{""} Inserir dados de um Cartão</Text>
          </Button>
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
          onPress={handleSubmit(handleNext)}
          loading={loading}
        />
      </HorizontalView>
    </Container>
  );
}

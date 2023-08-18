import { useForm } from "react-hook-form";
import {
  stripeCardExpirValidation,
  stripeCardNumberValidation,
} from "../../../../../../utils/creditCardValidation";
import { minLength, textWithSpacesOnly } from "../../../../../../utils/masks";
import { GlobalTitle } from "../../../../../Global/Title";
import { VerticalView } from "../../../../../Global/View/VerticalView";
import { CardContainer, CardDetails, NightAppCard } from "../styles";
import { Container } from "./styles";
import { useState } from "react";
import { InputForm } from "../../../../../Global/Forms/FormInput";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Error } from "../../../../../Global/error";
import { HorizontalView } from "../../../../../Global/View/HorizontalView";

interface NewCardProps {
  formData: any;
  setFormData: any;
  stepTwo: any;
}
export function NewCard({ formData, setFormData, stepTwo }: NewCardProps) {
  const [error, setError] = useState<any>({});
  const { control, handleSubmit } = useForm();

  const handleValidations = (type: any, value: any) => {
    let errorText;
    switch (type) {
      case "holderName":
        errorText =
          value === "" ? "Campo Obrigatório" : textWithSpacesOnly(value);
        setError({ ...error, holderNameError: errorText });
        break;
      case "number":
        errorText = stripeCardNumberValidation(value);
        setError({ ...error, numberError: errorText });
        break;
      case "expiryDate":
        errorText =
          value === "" ? "Campo Obrigatório" : stripeCardExpirValidation(value);
        setError({ ...error, expiryDateError: errorText });
        break;
      case "ccv":
        errorText = value === "" ? "Campo Obrigatório" : value.length < 3;
        setError({ ...error, ccvError: errorText });
        break;
      case "name":
        errorText =
          value === "" ? "Campo Obrigatório" : textWithSpacesOnly(value);
        setError({ ...error, nameError: errorText });
        break;
      case "cpfCnpj":
        errorText = value === "" ? "Campo Obrigatório" : minLength(11)(value);
        setError({ ...error, cpfCnpjError: errorText });
        break;
      case "CEP":
        errorText = value === "" ? "Campo Obrigatório" : minLength(8)(value);
        setError({ ...error, CEPError: errorText });
        break;
      case "number":
        errorText = value === "" ? "Campo Obrigatório" : "";
        setError({ ...error, numberError: errorText });
        break;
    }
  };
  const handleBlur = (e: any) => {
    handleValidations(e.target.name, e.target.value);
  };
  return (
    <Container>
      <>
        <CardContainer>
          <NightAppCard
            source={require("../../../../../../../assets/Checkout/blankCard.png")}
          />
          <VerticalView style={{ marginLeft: "30%", textAlign: "center" }}>
            <CardDetails>
              {formData.expiryDate === "" ? "Expiração" : formData.expiryDate}
            </CardDetails>
            <CardDetails>
              {formData.ccv === "" ? "CVC" : formData.ccv}
            </CardDetails>
          </VerticalView>
          <VerticalView
            style={{ marginLeft: "30%", marginTop: "5%", textAlign: "center" }}
          >
            <CardDetails>
              {formData.holderName === ""
                ? "Nome no Cartão"
                : formData.holderName}
            </CardDetails>
            <CardDetails>
              {formData.number === "" ? "Número do Cartão" : formData.number}
            </CardDetails>
          </VerticalView>
        </CardContainer>
        {stepTwo ? (
          <>
            <GlobalTitle title="Nome do Titular" fontSize={15} />
            <InputForm
              control={control}
              name="name"
              placeholder="Nome Aqui..."
              autoCapitalize="words"
              autoCorrect={true}
              style={{ height: RFPercentage(5), fontSize: RFValue(15) }}
              onBlur={handleBlur}
              onChange={(e) =>
                setFormData({ ...formData, name: e.nativeEvent.text })
              }
            />
            {error && error.nameError && error.nameError.length > 1 && (
              <Error>{error.nameError}</Error>
            )}
            <GlobalTitle title="CPF do Titular" fontSize={15} />
            <InputForm
              control={control}
              name="cpfCnpj"
              placeholder="CPF"
              keyboardType="numeric"
              style={{ height: RFPercentage(5), fontSize: RFValue(15) }}
              onChange={(e) =>
                setFormData({ ...formData, cpfCnpj: e.nativeEvent.text })
              }
            />
            <GlobalTitle title="CEP de Cobrança" fontSize={15} />
            <InputForm
              control={control}
              name="postalCode"
              placeholder="Número Aqui"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              style={{ height: RFPercentage(5), fontSize: RFValue(15) }}
              onChange={(e) =>
                setFormData({ ...formData, postalCode: e.nativeEvent.text })
              }
            />
            <GlobalTitle title="Número da Casa" fontSize={15} />
            <InputForm
              control={control}
              name="addressNumber"
              placeholder="Número Aqui"
              keyboardType="numeric"
              style={{ height: RFPercentage(5), fontSize: RFValue(15) }}
              onChange={(e) =>
                setFormData({ ...formData, addressNumber: e.nativeEvent.text })
              }
            />
          </>
        ) : (
          <>
            <GlobalTitle title="Nome no Cartão" fontSize={15} />
            <InputForm
              control={control}
              name="holderName"
              placeholder="Nome Aqui..."
              autoCapitalize="words"
              autoCorrect={true}
              style={{ height: RFPercentage(5), fontSize: RFValue(15) }}
              onBlur={handleBlur}
              onChange={(e) =>
                setFormData({ ...formData, holderName: e.nativeEvent.text })
              }
            />
            {error && error.CEPError && error.CEPError.length > 1 && (
              <Error>{error.CEPError}</Error>
            )}
            <GlobalTitle title="Número do Cartão" fontSize={15} />
            <InputForm
              control={control}
              name="number"
              placeholder="Número Aqui"
              keyboardType="numeric"
              style={{ height: RFPercentage(5), fontSize: RFValue(15) }}
              onChange={(e) =>
                setFormData({ ...formData, number: e.nativeEvent.text })
              }
            />
            <HorizontalView style={{ alignSelf: "center" }}>
              <VerticalView style={{ width: "45%" }}>
                <GlobalTitle title="Expiração" fontSize={15} />
                <InputForm
                  control={control}
                  name="expiryDate"
                  placeholder="Número Aqui"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  style={{
                    height: RFPercentage(5),
                    fontSize: RFValue(15),
                    width: "80%",
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, expiryDate: e.nativeEvent.text })
                  }
                />
              </VerticalView>
              <VerticalView style={{ width: "45%" }}>
                <GlobalTitle title="CVC" fontSize={15} />
                <InputForm
                  control={control}
                  name="ccv"
                  placeholder="Número Aqui"
                  keyboardType="numeric"
                  style={{
                    height: RFPercentage(5),
                    fontSize: RFValue(15),
                    width: "80%",
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, ccv: e.nativeEvent.text })
                  }
                />
              </VerticalView>
            </HorizontalView>
          </>
        )}
      </>
    </Container>
  );
}

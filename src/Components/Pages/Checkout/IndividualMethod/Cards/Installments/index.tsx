import ActionSheet from "@alessiocancian/react-native-actionsheet";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useCart } from "../../../../../../context/cart";
import Theme from "../../../../../../styles/themes";
import { AuthPostAPI } from "../../../../../../utils/api";
import { Button } from "../../../../../Global/Button";
import { GlobalTitle } from "../../../../../Global/Title";
import { VerticalView } from "../../../../../Global/View/VerticalView";
import { CardContainer, CardDetails, NightAppCard } from "../styles";
import { Container } from "./styles";

interface InstallmentsProps {
  formData: any;
  installmentCount: number;
  setInstallmentCount: any;
  selected: string;
  installment: any;
  setInstallment: any;
  installments: any;
  setInstallments: any;
}
export function Installments({
  formData,
  setInstallmentCount,
  installmentCount,
  selected,
  installment,
  setInstallment,
  installments,
  setInstallments,
}: InstallmentsProps) {
  const ref = useRef<any>();
  const handleOpen = () => {
    ref.current?.show();
  };
  const handleClose = (item: any) => {
    setInstallment(item);
    setInstallmentCount(Number(item.split("x ")[0]));
  };

  return (
    <Container>
      {selected !== "New" ? (
        <></>
      ) : (
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
              style={{
                marginLeft: "30%",
                marginTop: "5%",
                textAlign: "center",
              }}
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
        </>
      )}
      <GlobalTitle title="Parcelas" />
      <Button
        title={installment}
        background={Theme.color.secondary_100}
        color={Theme.color.gray_10}
        width={300}
        height={40}
        style={{
          alignSelf: "center",
        }}
        onPress={handleOpen}
      />
      <ActionSheet
        ref={ref}
        title="Parcelas"
        options={installments}
        cancelButtonIndex={0}
        onPress={(index: number) => {
          if (index == 0) {
          } else {
            handleClose(installments[index]);
          }
        }}
      />
    </Container>
  );
}

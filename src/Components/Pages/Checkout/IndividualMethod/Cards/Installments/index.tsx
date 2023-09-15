import ActionSheet from "@alessiocancian/react-native-actionsheet";
import { GlobalTitle } from "../../../../../Global/Title";
import { VerticalView } from "../../../../../Global/View/VerticalView";
import { CardContainer, CardDetails, NightAppCard } from "../styles";
import { Container, ShowInstallments } from "./styles";
import { useState, useEffect, useRef } from "react";
import { AuthPostAPI } from "../../../../../../utils/api";
import { useCart } from "../../../../../../context/cart";
import { Button } from "../../../../../Global/Button";
import Theme from "../../../../../../styles/themes";
import { ActivityIndicator } from "react-native";

interface InstallmentsProps {
  formData: any;
  installmentCount: number;
  setInstallmentCount: any;
  selected: string;
}
export function Installments({
  formData,
  setInstallmentCount,
  installmentCount,
  selected,
}: InstallmentsProps) {
  const [loading, setLoading] = useState(false);
  const { cart } = useCart();
  const [installment, setInstallment] = useState("");
  const [installments, setInstallments] = useState<any>(["Voltar"]);
  const ref = useRef<any>();
  const handleOpen = () => {
    ref.current.show();
  };
  const handleClose = (item: any) => {
    setInstallment(item);
  };

  console.log("installment: ", installment);
  async function handleCart() {
    setLoading(true);
    const connect = await AuthPostAPI("/purchase/cart", {
      ...cart,
      coupon: "",
    });
    setInstallment(
      `${connect.body.payment.installments[0].installmentNumber} x R$ ${connect.body.payment.installments[0].value}`
    );
    setInstallments([
      "Voltar",
      ...connect.body.payment.installments.map(
        (item: any) => `${item.installmentNumber} x R$ ${item.value}`
      ),
    ]);
    setLoading(false);
  }

  useEffect(() => {
    if (cart) {
      handleCart();
    }
  }, [cart]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="small" color={Theme.color.primary_80} />
      ) : (
        <>
          {selected !== "New" ? (
            <></>
          ) : (
            <>
              <CardContainer>
                <NightAppCard
                  source={require("../../../../../../../assets/Checkout/blankCard.png")}
                />
                <VerticalView
                  style={{ marginLeft: "30%", textAlign: "center" }}
                >
                  <CardDetails>
                    {formData.expiryDate === ""
                      ? "Expiração"
                      : formData.expiryDate}
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
                    {formData.number === ""
                      ? "Número do Cartão"
                      : formData.number}
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
        </>
      )}
    </Container>
  );
}

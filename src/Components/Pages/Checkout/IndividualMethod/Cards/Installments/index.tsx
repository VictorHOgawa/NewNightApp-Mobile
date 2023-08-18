import { GlobalTitle } from "../../../../../Global/Title";
import { VerticalView } from "../../../../../Global/View/VerticalView";
import { CardContainer, CardDetails, NightAppCard } from "../styles";
import { Container } from "./styles";

interface InstallmentsProps {
  formData: any;
}
export function Installments({ formData }: InstallmentsProps) {
  return (
    <Container>
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
      <GlobalTitle title="Parcelas" />
    </Container>
  );
}

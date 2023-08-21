import Theme from "../../../../styles/themes";
import { Button } from "../../../Global/Button";
import { GlobalTitle } from "../../../Global/Title";
import { Container, NightPremium } from "./styles";

export function Info() {
  return (
    <Container>
      <GlobalTitle title="Informações" />
      <NightPremium
        source={require("../../../../../assets/Global/Premium.png")}
      />
      <Button
        title="Dados de Cadastro"
        background={`${Theme.color.primary_40}`}
        color={`${Theme.color.gray_10}`}
        width={310}
        height={30}
      />
      <Button
        title="Tutorial, Políticas, Termos e FAQ"
        background={`${Theme.color.primary_40}`}
        color={`${Theme.color.gray_10}`}
        width={310}
        height={30}
      />
      <Button
        title="Jobs na Night"
        background={`${Theme.color.primary_40}`}
        color={`${Theme.color.gray_10}`}
        width={310}
        height={30}
      />
      <Button
        title="Sair"
        background={`${Theme.color.primary_40}`}
        color={`${Theme.color.gray_10}`}
        width={310}
        height={30}
      />
    </Container>
  );
}

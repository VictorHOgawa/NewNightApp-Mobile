import { useRoute } from "@react-navigation/native";
import { Container, Help, Icon, Image, JobCard, Text } from "./styles";
import { Header } from "../../Components/Global/Header";
import { GlobalTitle } from "../../Components/Global/Title";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { Button } from "../../Components/Global/Button";
import Theme from "../../styles/themes";
import { VerticalView } from "../../Components/Global/View/VerticalView";
import { Ad } from "../../Components/Global/Ad";
import { More } from "../../Components/Global/More";

export function JobDetails() {
  const { type } = useRoute().params as any;
  console.log("type: ", type);
  return (
    <>
      <Container>
        <Header />
        <Ad />
        <GlobalTitle title={"Jobs - " + type} />
        <JobCard>
          <HorizontalView style={{ alignItems: "center" }}>
            <Image source={require("../../../assets/Event/Event1.png")} />
            <VerticalView style={{ marginLeft: "5%" }}>
              <Text style={{ fontWeight: "bold" }}>Nome do Evento</Text>
              <Text>
                <Icon
                  source={require("../../../assets/Global/Icons/clockIcon.png")}
                />
                <Text style={{ fontWeight: "bold" }}>
                  {""} 12 de Julho de 2023
                </Text>{" "}
                às 21:00
              </Text>
              <Text>
                <Icon
                  source={require("../../../assets/Global/Icons/pinIcon.png")}
                />
                <Text style={{ fontWeight: "bold" }}>
                  {""} Cerveja de Garrafa
                </Text>{" "}
                Sinop/MT
              </Text>
            </VerticalView>
          </HorizontalView>
          <Button
            title={type === "Promoters" ? "Pegar Código" : "Ler QrCode"}
            background={`${Theme.color.confirmation}`}
            color={`${Theme.color.background}`}
            height={40}
            width={150}
          />
        </JobCard>
        <Help>
          <Icon
            source={require("../../../assets/Global/Icons/youtubeIcon.png")}
          />
          <Text> {""}Dúvidas? Veja esse Rápido Vídeo</Text>
        </Help>

        <More style={{ bottom: "2%" }} />
      </Container>
    </>
  );
}

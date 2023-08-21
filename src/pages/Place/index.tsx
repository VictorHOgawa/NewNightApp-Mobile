import moment from "moment";
import "moment/locale/pt-br";
import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { GlobalTitle } from "../../Components/Global/Title";
import { Buttons } from "../../Components/Pages/Place/Buttons";
import { Individual } from "../../Components/Pages/Place/Individual";
import { ButtonGroup, Container, Icon, Image, Map } from "./styles";
import { useState } from "react";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { Button } from "../../Components/Global/Button";
import Theme from "../../styles/themes";
import { Banner } from "../Event/styles";
import { Description } from "../../Components/Pages/Place/Description";
import { Video } from "../../Components/Pages/Place/Video";
import { LineBreak } from "../../Components/Global/LineBreak";

export function Place() {
  const [loading, setLoading] = useState(false);
  const description = [
    {
      name: "test",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "test",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "test",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <Container>
      <Header />
      <Ad />
      <Image source={require("../../../assets/Event/Event1.png")} />
      <GlobalTitle title="Test" />
      <Buttons />
      <Individual
        open={true}
        date={new Date()}
        local="test"
        city="Sinop"
        state="MT"
      />
      {loading ? (
        <></>
      ) : (
        <>
          <HorizontalView
            style={{
              alignSelf: "center",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Button
              title="Voltar"
              background={`${Theme.color.secondary_60}`}
              color={`${Theme.color.gray_10}`}
              width={125}
              height={40}
              fontSize={18}
            />
            <Button
              title={"Finalizar"}
              background={`${Theme.color.confirmation}`}
              color={`${Theme.color.gray_10}`}
              width={125}
              height={40}
              fontSize={18}
            />
          </HorizontalView>
          <Banner />
        </>
      )}
      <GlobalTitle title="Sobre o Bar" />
      <Button
        title="Cardápio"
        background={`${Theme.color.next}`}
        color={`${Theme.color.gray_10}`}
        width={300}
        height={80}
        fontSize={25}
      />
      <Description description={description[0]} />
      <Video video="https://www.youtube.com/watch?v=SAMpvaC4xR0" />
      <ButtonGroup>
        <Button
          background={`${Theme.color.confirmation}`}
          color={`${Theme.color.background}`}
          title=" Escolher Meus Ingressos"
          width={200}
          height={30}
          fontSize={12}
        >
          <Icon
            source={require("../../../assets/Global/Icons/ticketIcon.png")}
          />
        </Button>
        <Button
          background={`${Theme.color.primary_80}`}
          title=""
          width={50}
          height={30}
        >
          <Icon source={require("../../../assets/Global/Icons/sendIcon.png")} />
        </Button>
      </ButtonGroup>
      <LineBreak />
      {description.length === 1 ? (
        <></>
      ) : (
        description
          .slice(1)
          .map((item: { name: string; description: string }) => (
            <>
              <Description description={item} />
              <LineBreak />
            </>
          ))
      )}
    </Container>
  );
}

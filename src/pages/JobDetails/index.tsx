import { useNavigation, useRoute } from "@react-navigation/native";
import { Ad } from "../../Components/Global/Ad";
import { Button } from "../../Components/Global/Button";
import { Header } from "../../Components/Global/Header";
import { More } from "../../Components/Global/More";
import { GlobalTitle } from "../../Components/Global/Title";
import { HorizontalView } from "../../Components/Global/View/HorizontalView";
import { VerticalView } from "../../Components/Global/View/VerticalView";
import Theme from "../../styles/themes";
import { Container, Help, Icon, Image, JobCard, Map, Text } from "./styles";
import { useState, useEffect } from "react";
import { AuthPostAPI, authGetAPI } from "../../utils/api";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { Alert } from "react-native";
import moment from "moment";
import "moment/locale/pt-br";

export function JobDetails() {
  const navigation = useNavigation<any>();
  const { type } = useRoute().params as any;
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [portariaCode, setPortariaCode] = useState("");
  console.log("portariaCode: ", portariaCode);

  async function sendCode() {
    const connect = await AuthPostAPI(`/user/work/${portariaCode}`, {});
    console.log("connectSend: ", connect);
    if (connect.status !== 200) {
      return Alert.alert(connect.body);
    }
    return;
  }

  async function getDetails() {
    setLoading(true);
    const connect = await authGetAPI("/user/work");
    console.log("connect: ", connect);
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    setJobs(connect.body.eventWork);
    return setLoading(false);
  }

  const handleClick = async () => {
    if (type === "Portaria") {
      setLoading(true);
      const connect = await AuthPostAPI(`/user/work/${portariaCode}`, {});
      console.log("connectSend: ", connect);
      if (connect.status !== 200) {
        Alert.alert(connect.body);
        return setLoading(false);
      }
      navigation.replace("Jobs");
      return setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <Container>
        {loading ? (
          <LoadingIn />
        ) : (
          <>
            <LoadingOut />
            <Header />
            <Ad />
            <GlobalTitle title={"Jobs - " + type} />
            <Map
              data={jobs}
              renderItem={({ item }) => (
                <JobCard>
                  <HorizontalView style={{ alignItems: "center" }}>
                    <Image source={{ uri: item.event.photo_location }} />
                    <VerticalView style={{ marginLeft: "5%" }}>
                      <Text style={{ fontWeight: "bold" }}>Nome do Evento</Text>
                      <Text>
                        <Icon
                          source={require("../../../assets/Global/Icons/clockIcon.png")}
                        />
                        <Text style={{ fontWeight: "bold" }}>
                          {""} {moment(item.event.date).format("DD/MM/YYYY")}
                        </Text>{" "}
                        às {moment(item.event.date).format("HH:mm")}
                      </Text>
                      <Text>
                        <Icon
                          source={require("../../../assets/Global/Icons/pinIcon.png")}
                        />
                        <Text style={{ fontWeight: "bold" }}>
                          {""} {item.event.local}
                        </Text>{" "}
                        {item.event.city.name} / {item.event.city.state}
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
              )}
            />
            <Help>
              <Icon
                source={require("../../../assets/Global/Icons/youtubeIcon.png")}
              />
              <Text> {""}Dúvidas? Veja esse Rápido Vídeo</Text>
            </Help>

            <More
              style={{ bottom: "2%" }}
              type={type}
              handleClick={handleClick}
              portariaCode={portariaCode}
              setPortariaCode={setPortariaCode}
            />
          </>
        )}
      </Container>
    </>
  );
}

import { useNavigation } from "@react-navigation/native";
import { Header } from "../../Components/Global/Header";
import { GlobalTitle } from "../../Components/Global/Title";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { Container, Map, NightPremium, PremiumButton } from "./styles";

export function Jobs() {
  const navigation = useNavigation<any>();
  const Jobs = [
    {
      id: 1,
      bannerLocation: "../../../assets/Global/Premium.png",
      title: "Portaria",
      screen: "Portaria",
    },
    // {
    //   id: 2,
    //   bannerLocation: "../../../assets/Global/Premium.png",
    //   title: "Bar",
    //   screen: "Bar",
    // },
    {
      id: 3,
      bannerLocation: "../../../assets/Global/Premium.png",
      title: "Promoters",
      screen: "Promoter",
    },
  ];
  return (
    <Container>
      <LoadingFull />
      <Header />
      <Map
        data={Jobs}
        renderItem={({ item }) => (
          <>
            <GlobalTitle title={item.title} />
            <PremiumButton onPress={() => navigation.navigate(item.screen)}>
              <NightPremium
                source={require("../../../assets/Global/Premium.png")}
              />
            </PremiumButton>
          </>
        )}
      />
    </Container>
  );
}

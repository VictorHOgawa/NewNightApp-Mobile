import { Background, Button, Container, Icon, Text } from "./styles";

export function Buttons() {
  return (
    <Container>
      <Button>
        <Background source={require("../../../../../assets/Details/Geo.png")} />
        <Text>Localização {""}</Text>
        <Icon
          source={require("../../../../../assets/Global/Icons/geoIcon.png")}
        />
      </Button>
      <Button>
        <Background
          source={require("../../../../../assets/Details/Insta.png")}
        />
        <Text>Instagram {""}</Text>
        <Icon
          source={require("../../../../../assets/Global/Icons/instaIcon.png")}
        />
      </Button>
      <Button>
        <Background
          source={require("../../../../../assets/Details/Whats.png")}
        />
        <Text>Whatsapp {""}</Text>
        <Icon
          source={require("../../../../../assets/Global/Icons/whatsIcon.png")}
        />
      </Button>
    </Container>
  );
}

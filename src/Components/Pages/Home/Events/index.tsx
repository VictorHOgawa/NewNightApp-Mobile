import { TouchableOpacityProps, View } from "react-native";
import {
  City,
  Image,
  Title,
  Container,
  DetailsContainer,
  TextContainer,
} from "./styles";
import { Calendar } from "../../../Global/Calendar";
import { Text } from "react-native";

interface Props extends TouchableOpacityProps {
  photo_location?: string;
  name?: string;
  local?: string;
  date: Date;
  id?: string;
  city?: string;
  state?: string;
}
export function EventCard({
  photo_location,
  name,
  local,
  date,
  id,
  city,
  state,
}: Props) {
  return (
    <Container>
      <View>
        <Image source={{ uri: photo_location }} />
      </View>
      <Title>{name}</Title>
      <DetailsContainer>
        <TextContainer>
          <City>{local}</City>
          <City>
            {city} - {state}
          </City>
        </TextContainer>
        <Calendar date={date} />
      </DetailsContainer>
    </Container>
  );
}

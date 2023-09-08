import { TouchableOpacityProps, View } from "react-native";
import { Calendar } from "../../../Global/Calendar";
import {
  City,
  Container,
  DetailsContainer,
  Image,
  TextContainer,
  Title,
} from "./styles";

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
  ...rest
}: Props) {
  return (
    <Container {...rest}>
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
        <Calendar date={date} type="event" />
      </DetailsContainer>
    </Container>
  );
}

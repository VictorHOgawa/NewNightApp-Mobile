import {
  Container,
  PlaceCurrent,
  PlacePlace,
  PlaceTitle,
  SliderImg,
} from "./styles";

interface PlaceProps {
  photo_location?: string;
  name?: string;
  place?: string;
  current: boolean;
  id?: string;
  onPress?: any;
  city?: string;
  state?: string;
}
export function PlaceCard({
  photo_location,
  name,
  place,
  current,
  id,
  onPress,
  city,
  state,
  ...rest
}: PlaceProps) {
  return (
    <Container {...rest} onPress={onPress}>
      <SliderImg source={{ uri: photo_location }} />
      <PlaceCurrent current={current}>
        {current ? "Aberto" : "Fechado"}
      </PlaceCurrent>
      <PlaceTitle>{name}</PlaceTitle>
      <PlacePlace>
        {city} - {state}
      </PlacePlace>
    </Container>
  );
}

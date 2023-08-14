import {
  Container,
  PlaceCurrent,
  PlacePlace,
  PlaceTitle,
  SliderImg,
} from "./styles";

interface PlaceProps {
  photo_location: string;
  name: string;
  place: string;
  current: boolean;
  id: string;
}
export function PlaceCard({
  photo_location,
  name,
  place,
  current,
  id,
}: PlaceProps) {
  return (
    <Container>
      <SliderImg source={{ uri: photo_location }} />
      <PlaceCurrent current={current}>
        {current ? "Aberto" : "Fechado"}
      </PlaceCurrent>
      <PlaceTitle>{name}</PlaceTitle>
      <PlacePlace>{place}</PlacePlace>
    </Container>
  );
}

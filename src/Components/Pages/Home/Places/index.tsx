import {
  Container,
  PlaceCurrent,
  PlacePlace,
  PlaceTitle,
  SliderImg,
} from "./styles";
import moment from "moment";
import "moment/locale/pt-br";
import { useState, useEffect } from "react";

interface PlaceProps {
  photo?: string;
  name?: string;
  id?: string;
  onPress?: any;
  city?: any;
  openTime?: any;
}
export function PlaceCard({
  photo,
  name,
  id,
  onPress,
  city,
  openTime,
  ...rest
}: PlaceProps) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    function formatTime() {
      const currentDay = parseInt(moment().format("d")) - 1;
      const currentTime = moment().format("HH:mm");

      const currentOpenTime = openTime.find((day: any) => {
        return day.day === currentDay;
      });

      if (currentOpenTime) {
        if (
          moment(currentTime, "HH:mm").isSameOrAfter(
            moment(currentOpenTime.open_time, "HH:mm")
          ) &&
          moment(currentTime, "HH:mm").isSameOrBefore(
            moment(currentOpenTime.close_time, "HH:mm")
          )
        ) {
          setIsOpen(true);
        }
      }
    }

    formatTime();
  }, []);

  return (
    <Container {...rest} onPress={onPress}>
      <SliderImg source={{ uri: photo }} />
      <PlaceCurrent current={isOpen}>
        {isOpen ? "Aberto" : "Fechado"}
      </PlaceCurrent>
      <PlaceTitle>{name}</PlaceTitle>
      <PlacePlace>
        {city.name} - {city.state}
      </PlacePlace>
    </Container>
  );
}

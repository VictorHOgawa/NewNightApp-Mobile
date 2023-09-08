import {
  City,
  Container,
  DetailsContainer,
  Image,
  TextContainer,
  Title,
} from "./styles";
import moment from "moment";
import "moment/locale/pt-br";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { Calendar } from "../../../Global/Calendar";

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
  const [startHour, setStartHour] = useState<any>();
  const [endHour, setEndHour] = useState<any>();
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
          console.log("hora aberta");
          setIsOpen(true);
        }
        setStartHour(currentOpenTime.open_time);
        setEndHour(currentOpenTime.close_time);
      }
    }

    if (openTime) {
      formatTime();
    }
  }, [openTime]);

  return (
    <Container {...rest} onPress={onPress}>
      <View>
        <Image source={{ uri: photo }} />
      </View>
      <Title>{name}</Title>
      <DetailsContainer>
        <TextContainer>
          <City>
            {city.name} - {city.state}
          </City>
        </TextContainer>
        <Calendar date={openTime.date} type="place" isOpen={isOpen} />
      </DetailsContainer>
    </Container>
  );
}

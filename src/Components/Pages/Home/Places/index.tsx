import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Calendar } from "../../../Global/Calendar";
import {
  City,
  Container,
  DetailsContainer,
  Image,
  TextContainer,
  Title,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

interface PlaceProps {
  photo?: string;
  name?: string;
  id?: string;
  onPress?: any;
  city?: any;
  openTime?: any;
  address?: string;
}
export function PlaceCard({
  photo,
  name,
  id,
  onPress,
  city,
  openTime,
  address,
  ...rest
}: PlaceProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startHour, setStartHour] = useState<any>();
  const [endHour, setEndHour] = useState<any>();
  useEffect(() => {
    function formatTime() {
      const currentDay = parseInt(moment().format("d"));
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
          <City style={{ fontSize: RFValue(12) }}>{address}</City>
          <City>
            {city.name} - {city.state}
          </City>
        </TextContainer>
        <Calendar date={openTime.date} type="place" isOpen={isOpen} />
      </DetailsContainer>
    </Container>
  );
}

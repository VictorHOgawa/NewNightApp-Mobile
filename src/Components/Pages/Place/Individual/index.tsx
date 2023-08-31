import moment from "moment";
import "moment/locale/pt-br";
import { Calendar } from "../../../Global/Calendar";
import Theme from "../../../../styles/themes";
import { Container, Icon, Info, Left, Text } from "./styles";
import { useState, useEffect } from "react";

interface IndividualProps {
  date: Date;
  address: string;
  city: any;
  openTime: any;
}

export function Individual({ date, address, city, openTime }: IndividualProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [test, setTest] = useState<any>();
  const [loading, setLoading] = useState(true);

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
          setTest(currentOpenTime);
          setIsOpen(true);
          setLoading(false);
        }
      }
    }

    formatTime();
  }, []);
  return (
    <Container>
      <Left>
        <Info>
          <Icon
            source={require("../../../../../assets/Global/Icons/clockIcon.png")}
          />
          <Text>
            {""}
            <Text
              style={{
                fontWeight: "bold",
                color: isOpen ? `${Theme.color.next}` : `${Theme.color.red_60}`,
              }}
            >
              {""}
              {isOpen ? "Aberto" : "Fechado"}
            </Text>{" "}
            Das {""}
            {test?.open_time} {""} até {""} {test?.close_time}
          </Text>
        </Info>
        <Info>
          <Icon
            source={require("../../../../../assets/Global/Icons/pinIcon.png")}
          />
          <Text>
            {""}
            <Text style={{ fontWeight: "bold" }}>
              {address} {""}
            </Text>
            {""}
            {city.name} - {city.state}
          </Text>
        </Info>
      </Left>
      <Calendar date={date} />
    </Container>
  );
}

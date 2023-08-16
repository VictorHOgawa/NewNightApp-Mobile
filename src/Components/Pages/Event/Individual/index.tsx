import moment from "moment";
import "moment/locale/pt-br";
import { Calendar } from "../../../Global/Calendar";
import { Container, Icon, Info, Left, Text } from "./styles";

interface IndividualProps {
  date: Date;
  local: string;
  city: string;
  state: string;
}

export function Individual({ date, local, city, state }: IndividualProps) {
  return (
    <Container>
      <Left>
        <Info>
          <Text>
            <Icon
              source={require("../../../../../assets/Global/Icons/clockIcon.png")}
            />
            {""}
            <Text style={{ fontWeight: "bold" }}>
              {""}
              {moment(date).format("LL")}
            </Text>{" "}
            às {""}
            {moment(date).format("LT")}
          </Text>
        </Info>
        <Info>
          <Text>
            <Icon
              source={require("../../../../../assets/Global/Icons/pinIcon.png")}
            />
            {""}
            <Text style={{ fontWeight: "bold" }}>{local}</Text>
            {""}
            {city} - {state}
          </Text>
        </Info>
      </Left>
      <Calendar date={date} />
    </Container>
  );
}

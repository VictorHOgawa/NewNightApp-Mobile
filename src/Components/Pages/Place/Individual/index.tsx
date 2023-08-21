import moment from "moment";
import { Calendar } from "../../../Global/Calendar";
import Theme from "../../../../styles/themes";
import { Container, Icon, Info, Left, Text } from "./styles";

interface IndividualProps {
  open: boolean;
  date: Date;
  local: string;
  city: string;
  state: string;
}

export function Individual({
  open,
  date,
  local,
  city,
  state,
}: IndividualProps) {
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
                color: open ? `${Theme.color.next}` : `${Theme.color.red_60}`,
              }}
            >
              {""}
              {open ? "Aberto" : "Fechado"}
            </Text>{" "}
            Das {""}
            {moment(date).format("LT")} {""} até {""}{" "}
            {moment(date).format("LT")}
          </Text>
        </Info>
        <Info>
          <Icon
            source={require("../../../../../assets/Global/Icons/pinIcon.png")}
          />
          <Text>
            {""}
            <Text style={{ fontWeight: "bold" }}>
              {local} {""}
            </Text>
            {""}
            {city} - {state}
          </Text>
        </Info>
      </Left>
      <Calendar date={date} />
    </Container>
  );
}

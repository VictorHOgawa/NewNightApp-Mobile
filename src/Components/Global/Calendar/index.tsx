import { Container, Date, Footer } from "./styles";
import moment from "moment";
import "moment/locale/pt-br";

interface CalendarProps {
  date: Date;
}
export function Calendar({ date }: CalendarProps) {
  return (
    <Container>
      <Date color="primary">{moment(date).format("ddd")}</Date>
      <Date color="primary" fontSize={15}>
        {moment(date).format("D")}
      </Date>
      <Footer>
        <Date>{moment(date).format("MMM")}</Date>
      </Footer>
    </Container>
  );
}

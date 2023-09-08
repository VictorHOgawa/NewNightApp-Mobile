import { Container, Date, Footer } from "./styles";
import moment from "moment";
import "moment/locale/pt-br";

interface CalendarProps {
  date: Date;
  type: string;
  isOpen?: boolean;
}
export function Calendar({ date, type, isOpen }: CalendarProps) {
  return (
    <Container>
      {type === "event" ? (
        <>
          <Date>{moment(date).format("ddd")}</Date>
          <Date>{moment(date).format("D")}</Date>
          <Footer>
            <Date type="event">{moment(date).format("MMM")}</Date>
          </Footer>
        </>
      ) : (
        <>
          <Date>{moment(date).format("ddd")}</Date>
          <Date>{moment(date).format("D")}</Date>
          <Footer type="place" isOpen={isOpen}>
            <Date type="place" isOpen={isOpen}>
              {isOpen ? "Aberto" : "Fechado"}
            </Date>
          </Footer>
        </>
      )}
    </Container>
  );
}

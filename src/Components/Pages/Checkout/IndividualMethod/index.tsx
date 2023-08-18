import { PixMethod } from "./Pix";
import { Container } from "./styles";

interface IndividualMethodProps {
  selected: string;
}
export function IndividualMethod({ selected }: IndividualMethodProps) {
  return (
    <Container>
      {selected === "Pix" ? <PixMethod></PixMethod> : <></>}
    </Container>
  );
}

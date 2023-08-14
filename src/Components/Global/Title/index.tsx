import { Container, Title, TitleContainer } from "./styles";

interface TitleProps {
  title: string;
}
export function GlobalTitle({ title }: TitleProps) {
  return (
    <Container>
      <TitleContainer />
      <Title>{title}</Title>
    </Container>
  );
}

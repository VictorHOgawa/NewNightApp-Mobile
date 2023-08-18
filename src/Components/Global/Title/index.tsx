import { Container, Title, TitleContainer } from "./styles";

interface TitleProps {
  title: string;
  fontSize?: number;
}
export function GlobalTitle({ title, fontSize }: TitleProps) {
  return (
    <Container>
      <TitleContainer fontSize={fontSize} />
      <Title fontSize={fontSize}>{title}</Title>
    </Container>
  );
}

import { Container, Title, TitleContainer } from "./styles";

interface TitleProps {
  title: string;
  fontSize?: number;
  background?: string;
  color?: string;
}
export function GlobalTitle({
  title,
  fontSize,
  background,
  color,
}: TitleProps) {
  return (
    <Container>
      <TitleContainer fontSize={fontSize} background={background} />
      <Title fontSize={fontSize} color={color}>
        {title}
      </Title>
    </Container>
  );
}

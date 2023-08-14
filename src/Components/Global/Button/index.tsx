import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  background?: string;
  color?: string;
  title: string;
  width?: number;
  height?: number;
  marginTop?: number;
  loading?: boolean;
  disabled?: boolean;
  fontSize?: number;
}
export function Button({
  background,
  color,
  title,
  width,
  height,
  marginTop,
  loading,
  disabled,
  fontSize,
  ...rest
}: ButtonProps) {
  return (
    <Container
      disabled={disabled || loading}
      width={width}
      height={height}
      marginTop={marginTop}
      background={background}
    >
      <Title fontSize={fontSize} color={color}>
        {title}
      </Title>
    </Container>
  );
}

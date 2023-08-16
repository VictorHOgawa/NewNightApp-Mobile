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
  children?: React.ReactNode;
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
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container
      disabled={disabled || loading}
      width={width}
      height={height}
      marginTop={marginTop}
      background={background}
      {...rest}
    >
      {children}
      <Title fontSize={fontSize} color={color}>
        {title}
      </Title>
    </Container>
  );
}

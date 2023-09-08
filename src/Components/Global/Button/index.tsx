import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import Theme from "../../../styles/themes";
import { Container, Title } from "./styles";

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
      loading={loading}
      {...rest}
    >
      {children}
      <Title fontSize={fontSize} color={color}>
        {loading ? (
          <ActivityIndicator color={Theme.color.secondary_100} size="large" />
        ) : (
          title
        )}
      </Title>
    </Container>
  );
}

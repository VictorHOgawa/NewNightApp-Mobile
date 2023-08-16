import { View } from "./styles";

export function HorizontalView({ children, ...rest }: any) {
  return <View {...rest}>{children}</View>;
}

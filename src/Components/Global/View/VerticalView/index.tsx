import { View } from "./styles";

export function VerticalView({ children, ...rest }: any) {
  return <View {...rest}>{children}</View>;
}

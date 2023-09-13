import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.color.background};
  padding-bottom: ${getBottomSpace() + 20}px;
`;

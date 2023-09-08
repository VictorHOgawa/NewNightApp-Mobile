import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../styles/themes";

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.color.background};
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${RFValue(115)};
  height: ${RFValue(120)}px;
  align-self: center;
  padding: 0;
  margin: 0;
`;

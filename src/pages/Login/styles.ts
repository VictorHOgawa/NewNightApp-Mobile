import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Theme.color.background};
`;

export const Logo = styled.Image`
  width: ${RFValue(115)};
  height: ${RFValue(120)}px;
  align-self: center;
  padding: 0;
  margin: 0;
`;

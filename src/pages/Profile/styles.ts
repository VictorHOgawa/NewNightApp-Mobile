import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Theme.color.background};
  padding: 0 2%;
`;

export const Logo = styled.Image`
  width: ${RFValue(115)};
  height: ${RFValue(120)}px;
  align-self: center;
  padding: 0;
  margin-top: ${getStatusBarHeight() + 20}px;
`;

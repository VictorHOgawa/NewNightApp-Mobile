import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.color.background};
  /* padding-bottom: ${RFValue(60)}px; */
`;

export const MainView = styled.View`
  background-color: ${Theme.color.primary_80};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: ${RFValue(10)}px ${RFValue(15)}px;
`;

export const Logo = styled.Image`
  width: ${RFValue(115)};
  height: ${RFValue(120)}px;
  align-self: center;
  padding: 0;
  margin-top: ${getStatusBarHeight() + 20}px;
`;

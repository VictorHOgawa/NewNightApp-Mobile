import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  position: absolute;
  background-color: red;
  z-index: 2;
`;

export const Logo = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
`;

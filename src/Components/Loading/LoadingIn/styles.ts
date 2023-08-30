import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

export const Container = styled.View`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: red;
`;
export const Logo = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
`;

import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  left: 85%;
  top: 100%;
  border-radius: 200px;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  background-color: red;
`;

export const Icon = styled.Image`
  width: 100%;
  height: 100%;
`;

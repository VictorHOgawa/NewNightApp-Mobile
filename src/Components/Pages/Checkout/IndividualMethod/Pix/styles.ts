import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../../../styles/themes";

export const Container = styled.View``;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
  font-size: ${RFValue(20)}px;
  line-height: 25;
`;

export const QrCodeImage = styled.Image`
  width: ${RFValue(300)}px;
  height: ${RFValue(300)}px;
  align-self: center;
  margin-top: 5%;
`;

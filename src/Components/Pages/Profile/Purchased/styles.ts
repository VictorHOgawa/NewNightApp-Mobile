import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";

export const Container = styled.View`
  flex-direction: row;
`;

export const Btn = styled.TouchableOpacity`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  border-radius: 10px;
  margin: 2.5%;
  background-color: ${Theme.color.primary_40};
`;

export const Img = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  border-radius: 10px;
`;

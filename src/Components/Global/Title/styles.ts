import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Theme from "../../../styles/themes";

export const Container = styled.View`
  flex-direction: column-reverse;
  margin-left: 5%;
`;

export const TitleContainer = styled.View`
  width: ${RFValue(80)}px;
  height: ${RFValue(6)}px;
  background-color: ${Theme.color.primary_100};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${Theme.color.gray_10};
`;

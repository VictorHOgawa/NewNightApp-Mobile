import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../styles/themes";

export const Container = styled.View`
  width: 80%;
  background-color: ${Theme.color.secondary_100};
  border-radius: ${RFValue(15)}px;
  align-self: center;
  padding: ${RFValue(15)}px;
  margin-top: ${RFPercentage(10)}px;
`;

export const FormContainer = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  color: ${Theme.color.gray_10};
  margin-top: ${RFValue(10)}px;
`;

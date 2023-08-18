import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../../../styles/themes";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Icon = styled.Image`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;

export const CardContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 20%;
`;

export const NightAppCard = styled.Image`
  position: absolute;
  top: ${RFValue(-20)}px;
`;

export const CardDetails = styled.Text`
  z-index: 2;
  color: ${Theme.color.gray_10};
`;

export const Form = styled.TextInput`
  background-color: ${Theme.color.secondary_100};
  margin-top: 2%;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  color: ${Theme.color.gray_10};
  width: 100%;
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
`;

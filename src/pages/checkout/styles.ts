import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Theme.color.background};
`;

export const Safe = styled.Image`
  width: 90%;
  height: ${RFValue(50)}px;
  align-self: center;
  margin: ${RFValue(20)}px 0;
`;

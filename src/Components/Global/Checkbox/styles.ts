import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Theme from "../../../styles/themes";

export const MainButton = styled.TouchableOpacity``;

export const Container = styled.TouchableOpacity`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: 2px;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

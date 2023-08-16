import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../styles/themes";

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.color.background};
`;

export const Image = styled.Image`
  width: 100%;
  height: 30%;
  border-radius: 10px;
`;

export const Banner = styled.View`
  width: 80%;
  height: ${RFValue(100)}px;
  border-radius: 10px;
  background-color: red;
  align-self: center;
  margin-top: 5%;
`;

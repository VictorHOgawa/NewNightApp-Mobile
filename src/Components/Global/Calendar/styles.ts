import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../../styles/themes";

interface DateProps {
  color?: string;
  fontSize?: number;
}

export const Container = styled.View`
  flex-direction: column;
  width: ${RFValue(70)}px;
  height: ${RFValue(60)}px;
  background-color: ${Theme.color.gray_10};
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.Text<DateProps>`
  color: ${({ color }) =>
    color === "primary" ? Theme.color.primary_100 : Theme.color.gray_10};
  font-size: ${({ fontSize }) =>
    fontSize ? RFValue(fontSize) : RFValue(10)}px;
`;

export const Footer = styled.View`
  background-color: ${Theme.color.primary_100};
  width: ${RFValue(70)}px;
  height: ${RFValue(20)}px;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../../styles/themes";

interface DateProps {
  type?: "event" | "place";
  isOpen?: boolean;
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
  color: ${({ type, isOpen }) =>
    type === "place" && isOpen
      ? Theme.color.secondary_100
      : type === "place" && !isOpen
      ? Theme.color.secondary_100
      : type === "event"
      ? Theme.color.gray_10
      : Theme.color.secondary_100};
`;

export const Footer = styled.View<DateProps>`
  background-color: ${({ type, isOpen }) =>
    type === "place" && isOpen
      ? Theme.color.next
      : type === "place" && !isOpen
      ? Theme.color.red_60
      : Theme.color.primary_100};
  width: ${RFValue(70)}px;
  height: ${RFValue(20)}px;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

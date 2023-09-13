import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";

interface SelectedProps {
  selected: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-self: center;
  width: 95%;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Button = styled.TouchableOpacity<SelectedProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 45%;
  border: 2px solid ${Theme.color.primary_60};
  border-radius: 10px;
  padding: 15px 10px;
  color: ${Theme.color.gray_10};
  background-color: ${({ selected }) =>
    selected ? Theme.color.secondary_100 : "transparent"};
`;

export const Icon = styled.Image`
  width: 45px;
  height: 45px;
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;

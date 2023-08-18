import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: black;
  color: ${Theme.color.gray_10};
  border: 1px solid ${Theme.color.gray_10};
  border-radius: 10px;
  padding: 5px 10px;
  align-self: center;
  width: ${RFValue(300)}px;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
  font-size: ${RFValue(15)}px;
`;

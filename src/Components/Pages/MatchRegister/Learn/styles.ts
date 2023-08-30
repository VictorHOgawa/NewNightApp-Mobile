import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: #1e1e1e80;
  color: ${Theme.color.gray_10};
  border: 0;
  border-radius: 10px;
  align-self: center;
  padding: 5px 10px;
  width: 70%;
  justify-content: center;
  align-items: center;
  font-size: ${RFValue(12)}px;
  margin-top: 2%;
`;

export const Icon = styled.Image`
  width: 35px;
  height: 35px;
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
  text-align: center;
`;

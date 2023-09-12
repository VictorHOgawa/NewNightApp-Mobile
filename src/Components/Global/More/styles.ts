import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../styles/themes";

export const Container = styled.TouchableOpacity`
  position: absolute;
  left: 85%;
  bottom: 0;
  border-radius: 200px;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;

export const Icon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ModalBody = styled.View`
  background: ${Theme.color.primary_40};
  align-self: center;
  margin-top: 60%;
  width: ${RFValue(250)}px;
`;

export const Input = styled.TextInput`
  background-color: ${Theme.color.secondary_100};
  border: 0;
  border-radius: 10px;
  color: ${Theme.color.gray_10};
  width: 90%;
  align-self: center;
  margin-top: 2%;
  padding: 2%;
`;

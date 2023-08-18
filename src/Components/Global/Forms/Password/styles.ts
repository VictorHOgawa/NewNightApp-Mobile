import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Theme from "../../../../styles/themes";

export const Container = styled.View`
  align-items: center;
  flex-direction: row;

  padding: 2%;
  margin-top: 15px;

  width: ${RFPercentage(38)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;

  font-weight: 600;
  font-size: ${RFValue(18)}px;

  color: ${Theme.color.gray_10};
  background-color: ${Theme.color.secondary_100};
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(18)}px;
  width: 85%;
  color: ${Theme.color.gray_10};
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(20)}px;
`;

export const HideButton = styled.TouchableOpacity`
  width: 15%;

  align-items: center;
  justify-content: center;
`;

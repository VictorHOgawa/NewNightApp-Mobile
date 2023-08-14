import { TextInput } from "react-native";
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Theme from "../../../../styles/themes";

export const Container = styled(TextInput)`
  padding: 2%;
  margin-top: 15px;

  width: ${RFPercentage(38)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;

  font-weight: 600;
  font-size: ${RFValue(18)}px;

  border-color: ${Theme.color.primary_100};
  color: ${Theme.color.gray_10};
  background-color: ${Theme.color.secondary_100};
`;

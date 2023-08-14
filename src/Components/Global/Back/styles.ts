import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  margin-top: ${RFValue(20)}px;
`;

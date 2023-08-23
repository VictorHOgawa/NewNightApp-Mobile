import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.color.background};
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
`;

export const JobCard = styled.View`
  background-color: ${Theme.color.secondary_100};
  border-radius: 10px;
  padding: 10px 5px;
  margin-top: 2%;
  width: 95%;
  align-self: center;
`;

export const Image = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 5px;
  object-fit: cover;
`;

export const Icon = styled.Image`
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;
`;

export const Help = styled.TouchableOpacity`
  flex-direction: row;
  background-color: black;
  color: ${Theme.color.gray_10};
  border: 1px solid ${Theme.color.gray_10};
  border-radius: 10px;
  padding: 5px 10px;
  align-self: center;
  position: absolute;
  bottom: ${RFValue(20)}px;
  align-items: center;
  justify-content: center;
`;

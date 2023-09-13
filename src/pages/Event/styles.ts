import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { Dimensions } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.ScrollView`
  background-color: ${Theme.color.background};
  padding-bottom: ${getBottomSpace() + 20}px;
  padding: 0px 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.3}px;
  border-radius: 10px;
`;

export const Banner = styled.View`
  width: 80%;
  height: ${RFValue(100)}px;
  border-radius: 10px;
  background-color: red;
  align-self: center;
  margin-top: 5%;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  width: 90%;
`;

export const Icon = styled.Image`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
  font-size: ${RFValue(15)}px;
`;

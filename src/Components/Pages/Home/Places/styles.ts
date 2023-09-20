import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../../../styles/themes";

export const Container = styled.TouchableOpacity`
  width: ${RFValue(210)}px;
  height: auto;
  margin-left: ${RFValue(10)}px;
  background-color: ${Theme.color.secondaryFadePlus};
  justify-content: space-between;
  border-radius: ${RFValue(10)}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(100)}px;
  border-radius: 10px;
  border: 0;
`;

export const DetailsContainer = styled.View`
  padding: ${RFValue(5)}px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  padding: ${RFValue(5)}px;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-top: ${RFValue(5)}px;
  margin-left: ${RFValue(5)}px;
  color: ${Theme.color.gray_10};
`;

export const City = styled.Text`
  color: ${Theme.color.gray_10};
  font-size: ${RFValue(10)}px;
  margin-top: 5px;
`;

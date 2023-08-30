import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";

export const Container = styled.View`
  width: 95%;
  border: 1px solid ${Theme.color.gray_10};
  border-radius: 10px;
  align-self: center;
  align-items: center;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
`;

export const Logo = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(50)}px;
`;

export const Back = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: -50px;
`;

export const Download = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.color.secondary_100};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  color: ${Theme.color.gray_10};
  border: 0;
  padding: 5px;
  width: 75%;
  margin: 5px 0px;
  font-size: ${RFValue(12)}px;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
  text-align: center;
`;

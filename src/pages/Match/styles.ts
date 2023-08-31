import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../styles/themes";

export const Container = styled.View`
  flex: 1;
  min-height: 100vh;
  overflow: hidden;
`;

export const Background = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5%;
`;

export const Logo = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(50)}px;
`;

export const Card = styled.View`
  flex-direction: row;
  width: 90%;
  height: 60%;
  opacity: 1;
  border-radius: 10px;
  margin-top: 10%;
  justify-content: space-between;
  overflow: hidden;
  background-color: red;
  align-self: center;
`;

export const Photo = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
`;

export const Name1 = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${Theme.color.gray_10};
`;

export const Behind = styled(Card)`
  margin-top: 35%;
  z-index: -1;
  position: absolute;
`;

export const Footer1 = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10%;
`;

export const Buttons = styled.TouchableOpacity`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: 100px;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text``;

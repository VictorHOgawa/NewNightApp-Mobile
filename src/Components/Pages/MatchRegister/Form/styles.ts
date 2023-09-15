import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";

export const Container = styled.View``;

export const Photos = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const AddPhoto = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border: 1px dashed ${Theme.color.gray_10};
  width: ${RFValue(80)}px;
  height: ${RFValue(120)}px;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.color.secondary_100};
  margin: ${RFValue(5)}px;
`;

export const Icon = styled.Image`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
`;

export const Description = styled.TextInput`
  border: 1px dashed ${Theme.color.gray_10};
  border-radius: 10px;
  color: ${Theme.color.gray_10};
  background-color: ${Theme.color.secondary_100};
  padding: ${RFValue(5)}px;
  margin: 5% 0;
  height: ${RFValue(80)}px;
`;

export const Models = styled.TouchableOpacity`
  display: flex;
  background-color: ${Theme.color.primary_60};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  color: ${Theme.color.gray_10};
  border: 1px solid ${Theme.color.secondary_100};
  padding: 5px;
  margin: 5px 0px;
  width: 45%;
  align-self: flex-end;
  font-size: ${RFValue(12)}px;
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
`;

export const ModalBody = styled.View`
  width: 95%;
  background-color: ${Theme.color.primary_80};
  align-self: center;
`;

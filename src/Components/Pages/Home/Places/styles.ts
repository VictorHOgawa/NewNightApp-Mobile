import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";
import { RFValue } from "react-native-responsive-fontsize";

interface CurrentProps {
  current: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  width: ${RFValue(150)}px;
  text-align: center;
  background-color: ${Theme.color.primaryFadePlus};
  margin-left: ${RFValue(10)}px;
  border-radius: ${RFValue(10)}px;
  padding-bottom: 5px;
`;

export const SliderImg = styled.Image`
  width: 100%;
  height: ${RFValue(100)}px;
  border-radius: 10px;
`;

export const PlaceCurrent = styled.Text<CurrentProps>`
  color: ${(current) =>
    current ? Theme.color.confirmation : Theme.color.red_70};
`;

export const PlaceTitle = styled.Text`
  color: ${Theme.color.primary_80};
`;

export const PlacePlace = styled.Text`
  color: ${Theme.color.gray_10};
`;

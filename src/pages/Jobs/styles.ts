import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.color.background};
`;

export const Map = styled(
  FlatList as new (props: FlatListProps<any>) => FlatList<any>
).attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
`;

export const NightPremium = styled.Image`
  width: ${RFValue(310)}px;
  height: ${RFValue(90)}px;
  border-radius: 10px;
  align-self: center;
`;

export const PremiumButton = styled.TouchableOpacity`
  width: ${RFValue(310)}px;
  height: ${RFValue(90)}px;
  border-radius: 10px;
  align-self: center;
  margin-top: 5%;
`;

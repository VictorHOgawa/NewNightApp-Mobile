import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.color.background};
`;

export const Map = styled(
  FlatList as new (props: FlatListProps<any>) => FlatList<any>
).attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 98%;
  margin-top: 15px;
  margin-left: 2%;
`;

export const Btn = styled.TouchableOpacity`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  border-radius: 10px;
  margin: 2.5%;
  background-color: ${Theme.color.primary_40};
`;

export const Img = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  border-radius: 10px;
`;

export const Logo = styled.Image`
  width: ${RFValue(115)};
  height: ${RFValue(120)}px;
  align-self: center;
  padding: 0;
  margin-top: ${getStatusBarHeight() + 20}px;
`;

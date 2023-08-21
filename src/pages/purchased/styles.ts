import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../styles/themes";

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
`;

export const Img = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  border-radius: 10px;
`;

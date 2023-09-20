import { FlatList, FlatListProps } from "react-native";
import { styled } from "styled-components/native";
import { partyDTO } from "../../DTOS/partyDTOS";
import Theme from "../../styles/themes";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Theme.color.background};
`;

export const EventList = styled(
  FlatList as new (props: FlatListProps<partyDTO>) => FlatList<partyDTO>
).attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 98%;
  margin-top: 15px;
  margin-left: 1%;
`;

export const Map = styled(
  FlatList as new (props: FlatListProps<any>) => FlatList<any>
).attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 98%;
  margin-top: 15px;
  margin-left: 1%;
`;

export const Text = styled.Text`
  color: ${Theme.color.primary_100};
  padding: 20px;
  align-self: center;
  font-size: ${RFValue(18)}px;
`;

export const HeaderBar = styled.View`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  height: ${getStatusBarHeight() + 5}px;
  background-color: ${Theme.color.background};
`;

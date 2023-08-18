import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled.View`
  background-color: ${Theme.color.secondary_100};
  border-radius: 10px;
  color: ${Theme.color.gray_10};
  width: 80%;
  margin-left: 10%;
  padding: ${RFValue(10)}px;
`;

export const IndividualTotal = styled.View`
  flex-direction: row;
  border-bottom-color: ${Theme.color.gray_10};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  color: ${Theme.color.gray_10};
  padding: ${RFValue(5)}px;
  margin-top: ${RFValue(2)}px;
`;

export const FullTotal = styled.View`
  flex-direction: row;
  border-color: ${Theme.color.primary_60};
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  margin-top: ${RFValue(20)}px;
  padding: ${RFValue(5)}px;
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

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
`;

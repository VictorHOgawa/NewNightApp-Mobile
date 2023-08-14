import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import Theme from "../../../styles/themes";

export const AdList = styled(
  FlatList as new (props: FlatListProps<any>) => FlatList<any>
).attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
`;

export const Container = styled.Image`
  width: ${RFValue(300)}px;
  height: ${RFValue(100)}px;
  align-self: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${Theme.color.gray_10};
  margin: ${RFValue(-50)}px ${RFValue(30)}px;
`;

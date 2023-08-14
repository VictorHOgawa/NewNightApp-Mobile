import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { FlatList, FlatListProps } from "react-native";
import { partyDTO } from "../../DTOS/partyDTOS";

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
  margin-left: 2%;
`;

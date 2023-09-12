import { styled } from "styled-components/native";
import Theme from "../../../styles/themes";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled.View`
  flex-direction: column;
  width: 95%;
  align-self: center;
  flex: 1;
`;

export const Card = styled.View`
  background-color: ${Theme.color.secondary_100};
  border-radius: 10px;
  padding: 5px 2px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TicketImage = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;

export const Icons = styled.Image`
  width: ${RFValue(15)}px;
  height: ${RFValue(15)}px;
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
  font-size: ${RFValue(10)}px;
`;

export const Area = styled.View`
  border-style: solid;
  border-color: ${Theme.color.primary_60};
  border-width: 1px;
  border-radius: 5px;
  padding: 2px 5px;
  height: ${RFValue(22)}px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Match = styled.Image`
  align-self: flex-end;
`;

export const Help = styled.TouchableOpacity`
  flex-direction: row;
  background-color: black;
  color: ${Theme.color.gray_10};
  border: 1px solid ${Theme.color.gray_10};
  border-radius: 10px;
  padding: 5px 10px;
  align-self: center;
  position: absolute;
  bottom: 2%;
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

export const Test = styled.View`
  width: 50px;
  height: 50px;
  background-color: red;
`;

export const Close = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: blue;
`;

export const ModalBody = styled.View`
  width: 80%;
  height: 100%;
  background-color: green;
  align-self: center;
`;

export const QrCodeImage = styled.Image`
  width: ${RFValue(300)}px;
  height: ${RFValue(300)}px;
  align-self: center;
  margin-top: 5%;
`;

export const NoTickets = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 20%;
`;

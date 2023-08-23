import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";
import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ChatProps {
  active: boolean;
}

export const Container = styled.ScrollView`
  margin-top: 15px;
`;

export const Chats = styled.View`
  flex-direction: row;
  background-color: ${Theme.color.secondary_40};
  border-radius: 10px;
  padding: 5px;
  margin-bottom: ${RFValue(10)}px;
  justify-content: space-between;
`;

export const Map = styled(
  FlatList as new (props: FlatListProps<any>) => FlatList<any>
).attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 98%;
`;

export const Person = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;

export const Name = styled.Text`
  color: ${Theme.color.gray_10};
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`;

export const LocationImage = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  border-radius: 5px;
`;

export const LocationName = styled.Text`
  color: ${Theme.color.gray_10};
  font-size: ${RFValue(12)}px;
  font-weight: bold;
`;

export const ChatIcon = styled.Image<ChatProps>`
  width: ${({ active }) => (active ? RFValue(30) : RFValue(20))}px;
  height: ${({ active }) => (active ? RFValue(30) : RFValue(20))}px;
  margin-right: ${RFValue(20)}px;
`;

export const OpenChat = styled.TouchableOpacity<ChatProps>`
  width: ${({ active }) => (active ? RFValue(30) : RFValue(20))}px;
  height: ${({ active }) => (active ? RFValue(30) : RFValue(20))}px;
  align-self: center;
`;

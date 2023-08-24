import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FlatList, FlatListProps } from "react-native";

interface MessageProps {
  status: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.color.primary_80};
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(70)}px;
  margin-top: ${getStatusBarHeight() + 20}px;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${Theme.color.primary_20};
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: ${RFValue(10)}px;
`;

export const Pic = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 100px;
`;

export const Name = styled.Text`
  color: ${Theme.color.gray_10};
`;

export const MainView = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput`
  position: absolute;
  width: 100%;
  height: ${RFValue(40)}px;
  border-radius: 20px;
  background-color: ${Theme.color.secondary_100};
  bottom: 50px;
  align-self: center;
  padding: ${RFValue(10)}px;
`;

export const MessageView = styled.ScrollView`
  background-color: ${Theme.color.primary_100};
  height: 200px;
  margin-bottom: 25%;
  padding-bottom: 5%;
  padding: 0 10px;
`;

export const MessageBubble = styled.View<MessageProps>`
  flex-direction: row;
  text-align: justify;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: ${({ status }) =>
    status === "received" ? 0 : "20px"};
  border-bottom-right-radius: ${({ status }) =>
    status === "received" ? "20px" : 0};
  padding: ${RFValue(10)}px;
  background-color: ${({ status }) =>
    status === "received" ? Theme.color.gray_10 : Theme.color.secondary_100};
  margin-top: ${RFValue(10)}px;
  &:last-child {
    margin-bottom: ${RFValue(50)}px;
  }
`;

export const Message = styled.Text<MessageProps>`
  color: ${({ status }) =>
    status === "received" ? Theme.color.secondary_100 : Theme.color.gray_10};
`;

export const Map = styled(
  FlatList as new (props: FlatListProps<any>) => FlatList<any>
).attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  margin-top: 15px;
`;

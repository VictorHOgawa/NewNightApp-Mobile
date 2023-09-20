import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { Dimensions, FlatList, FlatListProps } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.ScrollView`
  background-color: ${Theme.color.background};
  padding-bottom: ${getBottomSpace() + 20}px;
  padding: 0px 10px;
`;

export const Image = styled.Image`
  width: ${Dimensions.get("window").width * 0.95}px;
  height: 200px;
  border-radius: 10px;
  margin-right: ${RFValue(100)}px;
`;

export const Banner = styled.Image`
  width: ${Dimensions.get("window").width * 0.85}px;
  height: ${(Dimensions.get("window").width * 0.85) / 2}px;
  align-self: center;
  margin-top: 5%;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  width: 90%;
`;

export const Icon = styled.Image`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;

export const Text = styled.Text`
  color: ${Theme.color.gray_10};
  font-size: ${RFValue(15)}px;
`;

export const Map = styled(
  FlatList as new (props: FlatListProps<any>) => FlatList<any>
).attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: ${Dimensions.get("window").width}px;
`;

export const ModalBody = styled.View`
  background: ${Theme.color.primary_40};
  align-self: center;
  width: ${Dimensions.get("window").width * 0.9}px;
`;

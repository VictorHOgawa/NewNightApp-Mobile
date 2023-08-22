import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import Theme from "../../styles/themes";
import { Dimensions, FlatList, FlatListProps } from "react-native";

export const Container = styled.ScrollView`
  background-color: ${Theme.color.background};
  padding: 0px 10px 50px 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.3}px;
  border-radius: 10px;
`;

export const Banner = styled.View`
  width: 80%;
  height: ${RFValue(100)}px;
  border-radius: 10px;
  background-color: red;
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
  width: 98%;
  margin-top: 15px;
  margin-left: 2%;
`;
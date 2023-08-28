import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import Theme from "../../../../styles/themes";
import { FlatList, FlatListProps } from "react-native";

// export const Container = styled(LinearGradient)`
// margin-top: 10px;
// flex-direction:row;
// align-items: center;
// justify-content: space-between;
// border-radius: ${RFValue(8)}px;
// border-width: 1px;
// border-color: ${Theme.color.light};
// align-self: center;
// padding:4px 10px;
// width: ${RFValue(230)}px;
// height: ${RFValue(45)}px;
// `

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 4px 10px;
  width: 60%;
  height: ${RFValue(45)}px;
  border-radius: ${RFValue(8)}px;
  background-color: transparent;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 4px 10px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${Theme.color.gray_10};
  margin-left: 10px;
  margin-right: 10px;
`;

export const LocationIcon = styled(Entypo)`
  font-size: 25px;
  color: ${Theme.color.primary_100};
`;

export const Icon = styled(Feather)`
  font-size: 25px;
  color: ${Theme.color.gray_10};
`;

export const ModalBody = styled.View`
  width: 100%;
  height: 200px;
  background-color: red;
`;

export const CityRow = styled.View`
  flex-direction: row;
  background-color: ${Theme.color.gray_10};
`;

export const CityText = styled.Text`
  color: ${Theme.color.secondary_100};
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

import { styled } from "styled-components/native";
import Theme from "../../../../../../styles/themes";

export const Container = styled.View``;

export const ShowInstallments = styled.TouchableOpacity`
  background-color: ${Theme.color.secondary_100};
  color: ${Theme.color.gray_10};
  border-radius: 5px;
  padding: 5px;
  width: 90%;
  align-self: center;
`;

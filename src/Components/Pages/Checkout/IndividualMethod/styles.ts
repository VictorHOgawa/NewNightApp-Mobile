import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";

export const Container = styled.View``;

export const Form = styled.TextInput`
  background-color: ${Theme.color.secondary_100};
  border: 0;
  border-radius: 5px;
  padding: 5px;
  color: ${Theme.color.gray_10};
  width: 100%;
  margin-top: 2%;
`;

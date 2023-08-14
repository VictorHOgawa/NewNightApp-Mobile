import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Theme from "../../../styles/themes";

interface Props extends TouchableOpacityProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const navigation = useNavigation<any>();

  return (
    <Container onPress={() => navigation.goBack()} {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={40}
        color={color ? color : Theme.color.gray_10}
      />
    </Container>
  );
}

import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";
import Theme from "../../../../styles/themes";

interface InputProps extends TextInputProps {}

export function BaseInput({ ...rest }: InputProps) {
  return <Container placeholderTextColor={Theme.color.gray_70} {...rest} />;
}

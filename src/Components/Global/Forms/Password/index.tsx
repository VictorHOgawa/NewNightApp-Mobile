import React, { useState } from "react";
import { TextInputProps, TouchableOpacityProps } from "react-native";

import { Container, Input, Icon, HideButton } from "./styles";
import Theme from "../../../../styles/themes";
type Props = TextInputProps;

interface ButtonProps extends TouchableOpacityProps {
  pressed: boolean;
}

export function Password({ ...rest }: Props, { pressed }: ButtonProps) {
  const [hidePass, setHidePass] = useState(true);

  return (
    <Container>
      <Input
        {...rest}
        placeholderTextColor={Theme.color.gray_70}
        secureTextEntry={hidePass}
      />
      <HideButton onPress={() => setHidePass(!hidePass)}>
        {hidePass ? (
          <Icon color={Theme.color.gray_10} name="eye" />
        ) : (
          <Icon color={Theme.color.primary_100} name="eye-off" />
        )}
      </HideButton>
    </Container>
  );
}

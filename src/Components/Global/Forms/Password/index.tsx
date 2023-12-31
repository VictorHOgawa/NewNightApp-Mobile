import React, { useState } from "react";
import { TextInputProps, ViewProps } from "react-native";

import { Container, Input, Icon, HideButton } from "./styles";
import Theme from "../../../../styles/themes";

interface Props extends TextInputProps {
  containerStyle?: any;
}

export function Password({ containerStyle, ...rest }: Props) {
  const [hidePass, setHidePass] = useState(true);

  return (
    <Container style={containerStyle}>
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

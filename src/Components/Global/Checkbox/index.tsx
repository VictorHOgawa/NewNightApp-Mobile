import { RFValue } from "react-native-responsive-fontsize";
import Theme from "../../../styles/themes";
import { Container, MainButton } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

interface CheckboxProps {
  checked: boolean;
  onPress: any;
}

export function Checkbox({ checked, onPress }: CheckboxProps) {
  return (
    <MainButton onPress={onPress}>
      <Container>
        {checked ? (
          <FontAwesome5
            name="check-square"
            size={RFValue(20)}
            color={Theme.color.gray_100}
          />
        ) : (
          <FontAwesome5
            name="square"
            size={RFValue(20)}
            color={Theme.color.gray_100}
          />
        )}
      </Container>
    </MainButton>
  );
}

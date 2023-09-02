import { useState } from "react";
import { Modal } from "react-native";
import Theme from "../../../styles/themes";
import { BackButton } from "../Back";
import { Button } from "../Button";
import { GlobalTitle } from "../Title";
import { Container, Icon, Input, ModalBody } from "./styles";

interface MoreProps extends React.ComponentProps<typeof Container> {
  type?: string;
}

export function More({ type, ...rest }: MoreProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container {...rest} onPress={() => setOpen(true)}>
        <Icon source={require("../../../../assets/Global/Plus.png")} />
      </Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => setOpen(false)}
      >
        <ModalBody>
          <BackButton onPress={() => setOpen(false)} />
          <GlobalTitle title="Insira o Código" />
          <Input
            placeholder="EX: Carol20"
            placeholderTextColor={Theme.color.gray_10}
          />
          <Button
            title="Confirmar"
            background={`${Theme.color.confirmation}`}
            color={`${Theme.color.secondary_100}`}
            onPress={() => setOpen(false)}
            height={30}
          />
        </ModalBody>
      </Modal>
    </>
  );
}

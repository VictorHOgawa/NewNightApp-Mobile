import { Container, Icon, Input, ModalBody } from "./styles";
import { useState } from "react";
import { Modal } from "react-native";
import { BackButton } from "../Back";
import { LineBreak } from "../LineBreak";
import { GlobalTitle } from "../Title";
import Theme from "../../../styles/themes";

interface MoreProps {
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
        </ModalBody>
      </Modal>
    </>
  );
}

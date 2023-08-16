import { Container } from "./styles";

interface TabProps {
  active: boolean;
}

export function Tabs({ active, ...rest }: TabProps) {
  return <Container active={active} {...rest} />;
}

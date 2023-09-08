import { useState } from "react";
import { CityButton } from "../../Pages/Home/CityButton";
import { BackButton } from "../Back";
import { AltContainer, AltLogo, Container, Logo } from "./styles";

interface HeaderProps {
  page?: string;
}
export function Header({ page }: HeaderProps) {
  const [city, setCity] = useState({ id: "", name: "Cidades", state: "" });
  return (
    <>
      {page === "main" ? (
        <Container>
          <>
            <Logo source={require("../../../../assets/Global/Logo.png")} />
            <CityButton selected={setCity} />
          </>
        </Container>
      ) : (
        <AltContainer>
          <>
            <BackButton />
            <AltLogo source={require("../../../../assets/Global/Logo.png")} />
          </>
        </AltContainer>
      )}
    </>
  );
}

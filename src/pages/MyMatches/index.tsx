import { useEffect, useState } from "react";
import { LoginValidation } from "../../Components/Global/Login";
import { Chat } from "../../Components/Pages/MyMatches/Chat";
import { Crew } from "../../Components/Pages/MyMatches/Crew";
import { Matched } from "../../Components/Pages/MyMatches/Matched";
import { loginVerifyAPI } from "../../utils/api";
import { Container, Logo, MainView } from "./styles";

export function MyMatches() {
  const [logged, setLogged] = useState(false);

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      return setLogged(true);
    }
    setLogged(false);
  }

  useEffect(() => {
    handleVerify();
  }, []);
  return (
    <Container>
      <Logo source={require("../../../assets/Global/Logo2.png")} />
      {logged ? (
        <>
          <MainView>
            <Matched />
            <Crew />
            <Chat />
          </MainView>
        </>
      ) : (
        <LoginValidation />
      )}
    </Container>
  );
}

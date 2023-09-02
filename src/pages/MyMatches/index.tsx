import { useEffect, useState } from "react";
import { LoginValidation } from "../../Components/Global/Login";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { Chat } from "../../Components/Pages/MyMatches/Chat";
import { Crew } from "../../Components/Pages/MyMatches/Crew";
import { Matched } from "../../Components/Pages/MyMatches/Matched";
import { loginVerifyAPI } from "../../utils/api";
import { Container, Logo, MainView } from "./styles";

export function MyMatches() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      setLogged(true);
    }
    return setLoading(false);
  }

  useEffect(() => {
    handleVerify();
  }, []);
  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
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
        </>
      )}
    </Container>
  );
}

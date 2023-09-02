import { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { LineBreak } from "../../Components/Global/LineBreak";
import { LoginValidation } from "../../Components/Global/Login";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { Info } from "../../Components/Pages/Profile/Info";
import { loginVerifyAPI } from "../../utils/api";
import { Container, Logo } from "./styles";

export function Profile() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      setLogged(true);
    }
    return setLogged(false);
  }

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <Container
      contentContainerStyle={{ flexGrow: 1, paddingBottom: RFValue(80) }}
    >
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Logo source={require("../../../assets/Global/Logo2.png")} />
          {logged ? (
            <>
              <LineBreak />
              <Info />
            </>
          ) : (
            <LoginValidation />
          )}
        </>
      )}
    </Container>
  );
}

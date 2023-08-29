import { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { LineBreak } from "../../Components/Global/LineBreak";
import { LoginValidation } from "../../Components/Global/Login";
import { Info } from "../../Components/Pages/Profile/Info";
import { loginVerifyAPI } from "../../utils/api";
import { Container, Logo } from "./styles";

export function Profile() {
  const [logged, setLogged] = useState(false);

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    console.log("verify: ", verify);
    if (verify === 200) {
      return setLogged(true);
    }
    setLogged(false);
  }

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <Container
      contentContainerStyle={{ flexGrow: 1, paddingBottom: RFValue(80) }}
    >
      <Logo source={require("../../../assets/Global/Logo2.png")} />
      {logged ? (
        <>
          <LineBreak />
          <Info />
        </>
      ) : (
        <LoginValidation />
      )}
    </Container>
  );
}

import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Header } from "../../Components/Global/Header";
import { LineBreak } from "../../Components/Global/LineBreak";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { IndividualMethod } from "../../Components/Pages/Checkout/IndividualMethod";
import { Method } from "../../Components/Pages/Checkout/Method";
import { Title } from "../../Components/Pages/Checkout/Title";
import { Total } from "../../Components/Pages/Checkout/Total";
import { useCart } from "../../context/cart";
import { AuthPostAPI, loginVerifyAPI } from "../../utils/api";
import { Container, Safe } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

export function Checkout() {
  const { cart } = useCart();
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState("Pix");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState<any>();
  const [coupon, setCoupon] = useState("");
  const [loadingCoupon, setLoadingCoupon] = useState(false);
  const [QrCode, setQrCode] = useState(false);
  const [pix, setPix] = useState<any>();
  const [installment, setInstallment] = useState("");
  const [installments, setInstallments] = useState<any>([""]);
  const [installmentCount, setInstallmentCount] = useState(1);

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify !== 200) {
      Alert.alert("Realize o Login antes de Prosseguir");
      return navigation.navigate("Login", { page: "Checkout" });
    }
  }

  async function handleCart() {
    if (coupon !== "") {
      setLoadingCoupon(true);
    }
    if (cart.ticket.ticket.length === 0 && cart.product.length === 0) {
      Alert.alert("Selecione um (ou mais) Produto(s)");
      return navigation.goBack();
    }
    const connect = await AuthPostAPI("/purchase/cart", {
      ...cart,
      coupon: coupon,
    });
    if (connect.status !== 200) {
      Alert.alert(connect.body);
      setLoadingCoupon(false);
      return navigation.goBack();
    }
    setInstallment(
      `${connect.body.payment.installments[0].installmentNumber} x RS ${connect.body.payment.installments[0].value}`
    );
    setInstallments([
      "Voltar",
      ...connect.body.payment.installments.map(
        (item: any) => `${item.installmentNumber} x R$ ${item.value}`
      ),
    ]);
    setQrCode(false);
    setTotal(connect.body);
    setLoadingCoupon(false);
    return setLoading(false);
  }

  useEffect(() => {
    if (cart) {
      handleCart();
    }
  }, []);

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
          <Header />
          <Title />
          <LineBreak />
          <Method selected={selected} setSelected={setSelected} />
          <IndividualMethod
            selected={selected}
            coupon={coupon}
            setCoupon={setCoupon}
            AddCoupon={handleCart}
            loadingCoupon={loadingCoupon}
            QrCode={QrCode}
            setQrCode={setQrCode}
            pix={pix}
            setPix={setPix}
            installment={installment}
            setInstallment={setInstallment}
            installments={installments}
            setInstallments={setInstallments}
            installmentCount={installmentCount}
            setInstallmentCount={setInstallmentCount}
          />
          <LineBreak />
          <Total selected={selected} total={total} loading={loading} />
          <Safe source={require("../../../assets/Checkout/Safe.png")} />
        </>
      )}
    </Container>
  );
}

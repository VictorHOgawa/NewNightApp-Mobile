import { CardMethod } from "./Cards";
import { PixMethod } from "./Pix";
import { Container } from "./styles";

interface IndividualMethodProps {
  selected: string;
  coupon: string;
  setCoupon: any;
  AddCoupon: any;
  loadingCoupon: boolean;
  QrCode: boolean;
  setQrCode: any;
  pix: any;
  setPix: any;
}

export function IndividualMethod({
  selected,
  coupon,
  setCoupon,
  loadingCoupon,
  AddCoupon,
  QrCode,
  setQrCode,
  pix,
  setPix,
}: IndividualMethodProps) {
  return (
    <Container>
      {selected === "Pix" ? (
        <PixMethod
          coupon={coupon}
          setCoupon={setCoupon}
          AddCoupon={AddCoupon}
          loadingCoupon={loadingCoupon}
          QrCode={QrCode}
          setQrCode={setQrCode}
          pix={pix}
          setPix={setPix}
        />
      ) : (
        <CardMethod
          coupon={coupon}
          setCoupon={setCoupon}
          AddCoupon={AddCoupon}
          loadingCoupon={loadingCoupon}
        />
      )}
    </Container>
  );
}

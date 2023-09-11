import { Ad } from "../../Components/Global/Ad";
import { Header } from "../../Components/Global/Header";
import { LoadingFull } from "../../Components/Loading/LoadingFull";
import { LoadingIn } from "../../Components/Loading/LoadingIn";
import { LoadingOut } from "../../Components/Loading/LoadingOut";
import { ProductCards } from "../../Components/Pages/Products";
import { authGetAPI } from "../../utils/api";
import { Container } from "./styles";
import { useState, useEffect } from "react";

export function Products() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    setLoading(true);
    const connect = await authGetAPI("/user/product");
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    setEvents(connect.body.events);
    return setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Header />
          <Ad />
          <ProductCards events={events} reload={getProducts} />
        </>
      )}
    </Container>
  );
}

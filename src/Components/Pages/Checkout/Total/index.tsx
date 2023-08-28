import { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useCart } from "../../../../context/cart";
import Theme from "../../../../styles/themes";
import { HorizontalView } from "../../../Global/View/HorizontalView";
import { VerticalView } from "../../../Global/View/VerticalView";
import { Container, FullTotal, IndividualTotal, Map, Text } from "./styles";

export function Total() {
  const { cart } = useCart();

  const [ticketTotal, setTicketTotal] = useState(0);
  const [productTotal, setProductTotal] = useState(0);
  const [fullTotal, setFullTotal] = useState(0);

  async function GetPrices() {}

  useEffect(() => {
    setTicketTotal(
      cart.ticket.ticket.reduce((acc: any, item: any) => acc + item.value, 0)
    );
    setProductTotal(
      cart.product.reduce((acc: any, item: any) => acc + item.value, 0)
    );
    setFullTotal(ticketTotal + productTotal);
  }, []);

  const [seeAll, setSeeAll] = useState(false);
  return (
    <Container>
      {!seeAll ? (
        <></>
      ) : (
        <>
          <Map
            data={cart.product}
            renderItem={({ item }) => (
              <>
                {item.length === 0 ? (
                  <></>
                ) : (
                  <>
                    <IndividualTotal>
                      <HorizontalView
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <VerticalView>
                          <Text>{item.name}</Text>
                        </VerticalView>
                        <VerticalView>
                          <Text>x {item.quantity}</Text>
                        </VerticalView>
                        <VerticalView>
                          <Text>
                            {item.value.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </Text>
                        </VerticalView>
                      </HorizontalView>
                    </IndividualTotal>
                  </>
                )}
              </>
            )}
          />
          <Map
            data={cart.ticket.ticket}
            renderItem={({ item }) => (
              <>
                {item.length === 0 ? (
                  <></>
                ) : (
                  <>
                    <IndividualTotal>
                      <HorizontalView
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <VerticalView>
                          <Text>{item.name}</Text>
                        </VerticalView>
                        <VerticalView>
                          <Text>x {item.quantity}</Text>
                        </VerticalView>
                        <VerticalView>
                          <Text>
                            {item.value.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </Text>
                        </VerticalView>
                      </HorizontalView>
                    </IndividualTotal>
                  </>
                )}
              </>
            )}
          />
        </>
      )}
      <FullTotal>
        <HorizontalView
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <VerticalView>
            <Text>Total {""}</Text>
          </VerticalView>
          <VerticalView style={{ justifyContent: " flex-end" }}>
            <Text>
              {fullTotal.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </VerticalView>
        </HorizontalView>
      </FullTotal>
      <Text
        onPress={() => setSeeAll(!seeAll)}
        style={{
          textAlign: "center",
          marginTop: RFValue(10),
          borderWidth: 1,
          borderColor: Theme.color.gray_10,
          borderRadius: 5,
          width: RFValue(100),
          alignSelf: "center",
        }}
      >
        Ver Detalhes
      </Text>
    </Container>
  );
}

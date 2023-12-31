import { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useCart } from "../../../../context/cart";
import Theme from "../../../../styles/themes";
import { AuthPostAPI } from "../../../../utils/api";
import { HorizontalView } from "../../../Global/View/HorizontalView";
import { VerticalView } from "../../../Global/View/VerticalView";
import { Container, FullTotal, IndividualTotal, Map, Text } from "./styles";

interface TotalProps {
  selected: string;
  total: any;
  loading: boolean;
}

export function Total({ selected, total, loading }: TotalProps) {
  
  const [seeAll, setSeeAll] = useState(false);
 

  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
          {!seeAll ? (
            <></>
          ) : (
            <>
              <Map
                data={total.product}
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
                              <Text>{item.productName}</Text>
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
                data={total.ticket}
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
                              <Text>{item.ticketName}</Text>
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
                  {selected === "Pix"
                    ? total.payment.pix.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : total.payment.creditValue.toLocaleString("pt-br", {
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
        </>
      )}
    </Container>
  );
}

import { RFValue } from "react-native-responsive-fontsize";
import { HorizontalView } from "../../../Global/View/HorizontalView";
import { VerticalView } from "../../../Global/View/VerticalView";
import { TicketType } from "../../Event/Tickets/styles";
import { Container, FullTotal, IndividualTotal, Map, Text } from "./styles";
import { useState } from "react";
import Theme from "../../../../styles/themes";

export function Total() {
  const Items = [
    {
      product: "Produto 1",
      cost: 20,
    },
    {
      product: "Produto 2",
      cost: 500,
    },
    {
      product: "Produto 1",
      cost: 220,
    },
    {
      product: "Produto 2",
      cost: 50240,
    },
    {
      product: "Produto 1",
      cost: 205,
    },
    {
      product: "Produto 2",
      cost: 5010,
    },
  ];

  const [seeAll, setSeeAll] = useState(false);
  return (
    <Container>
      {!seeAll ? (
        <></>
      ) : (
        <>
          <Map
            data={Items}
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
                          <Text>{item.product}</Text>
                        </VerticalView>
                        <VerticalView>
                          <Text>
                            {item.cost.toLocaleString("pt-br", {
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
              {Items.reduce((sum, item) => sum + item.cost, 0).toLocaleString(
                "pt-br",
                { style: "currency", currency: "BRL" }
              )}
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

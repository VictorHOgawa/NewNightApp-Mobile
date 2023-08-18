import { useState } from "react";
import { useCart } from "../../../../../../context/cart";
import { GlobalTitle } from "../../../../../Global/Title";
import {
  Counter,
  CounterArea,
  CounterText,
  Icon,
  IconButton,
  Item,
  ItemButton,
  Items,
  Map,
  TicketTitle,
  TicketType,
  Title,
} from "../../styles";
import { Text } from "../../../Buttons/styles";
import { HorizontalView } from "../../../../../Global/View/HorizontalView";
import { TextInput } from "react-native";
import { VerticalView } from "../../../../../Global/View/VerticalView";
import { LineBreak } from "../../../../../Global/LineBreak";

interface StepTwoProps {
  product: {
    name: string;
    value: number;
    id: string;
    type: string;
    photo_location: string;
  }[];
  type: string;
  setType: any;
}
export function StepTwo({ product, type, setType }: StepTwoProps) {
  const [filteredProduct, setFilteredProduct] = useState<any>([]);
  const { cart, add } = useCart();
  const [moreProducts, setMoreProducts] = useState(true);
  function handleSelectType(type: string) {
    setFilteredProduct(product.filter((item) => item.type === type));
    setType(type);
  }

  const handleChange = (
    type: string,
    product: { name: string; value: number; id: string }
  ) => {
    const exists = cart.product.find(
      (item: { id: string }) => item.id === product.id
    );
    const products = cart.product.filter(
      (item: { id: string }) => item.id !== product.id
    );
    if (type === "increase") {
      const quantity = exists ? exists.quantity + 1 : 1;

      return add([...products, { ...product, quantity }], "product");
    }
    if (type === "decrease" && exists && exists.quantity > 1) {
      const quantity = exists.quantity - 1;
      return add([...products, { ...product, quantity }], "product");
    } else {
      return add(products, "product");
    }
  };

  function ticketQuantity(id: string) {
    const ticketExists = cart.product.find(
      (ticket: { id: string }) => ticket.id === id
    );
    return ticketExists ? ticketExists.quantity : 0;
  }

  return (
    <>
      <GlobalTitle title="Produtos" />
      {type === "" ? (
        <>
          <Items>
            <ItemButton onPress={() => handleSelectType("VODKA")}>
              <Item
                source={require("../../../../../../../assets/Event/Item1.png")}
              />
            </ItemButton>
            <ItemButton onPress={() => handleSelectType("WHISKEY")}>
              <Item
                source={require("../../../../../../../assets/Event/Item2.png")}
              />
            </ItemButton>
            <ItemButton onPress={() => handleSelectType("BEER")}>
              <Item
                source={require("../../../../../../../assets/Event/Item3.png")}
              />
            </ItemButton>
            <LineBreak />
            <ItemButton onPress={() => handleSelectType("COMBO")}>
              <Item
                source={require("../../../../../../../assets/Event/Item4.png")}
              />
            </ItemButton>
            <ItemButton onPress={() => handleSelectType("ENERGÉTICOS")}>
              <Item
                source={require("../../../../../../../assets/Event/Item5.png")}
              />
            </ItemButton>
            <ItemButton onPress={() => handleSelectType("OUTROS")}>
              <Item
                source={require("../../../../../../../assets/Event/Item6.png")}
              />
            </ItemButton>
          </Items>
        </>
      ) : (
        <Map
          data={filteredProduct}
          renderItem={({ item }) =>
            filteredProduct.length === 0 ? (
              <></>
            ) : (
              <>
                <Title>{item.type}</Title>
                <VerticalView>
                  <TicketType>
                    <Item source={{ uri: item.photo_location }} />
                    <VerticalView>
                      <TicketTitle style={{ fontWeight: "bold" }}>
                        {item.name}
                      </TicketTitle>
                      <TicketTitle>
                        {item.value.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TicketTitle>
                    </VerticalView>
                    <CounterArea>
                      <IconButton
                        onPress={() => handleChange("decrease", item)}
                      >
                        <Icon
                          source={require("../../../../../../../assets/Event/Minus.png")}
                        />
                      </IconButton>
                      <Counter>
                        <CounterText>{ticketQuantity(item.id)}</CounterText>
                      </Counter>
                      <IconButton
                        onPress={() => handleChange("increase", item)}
                      >
                        <Icon
                          source={require("../../../../../../../assets/Event/Plus.png")}
                        />
                      </IconButton>
                    </CounterArea>
                  </TicketType>
                </VerticalView>
              </>
            )
          }
        />
      )}
    </>
  );
}

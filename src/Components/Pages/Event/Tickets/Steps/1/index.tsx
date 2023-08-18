import { useCart } from "../../../../../../context/cart";
import { GlobalTitle } from "../../../../../Global/Title";
import { VerticalView } from "../../../../../Global/View/VerticalView";
import {
  Counter,
  CounterArea,
  CounterText,
  Icon,
  IconButton,
  Map,
  TicketTitle,
  TicketType,
} from "../../styles";
import { useState, useEffect } from "react";

interface StepOneProps {
  ticketSlots: {
    name: string;
    id: string;
    ticket: {
      ticket: any;
      id: string;
      name: string;
      value: number;
    }[];
  };
}

export function StepOne({ ticketSlots }: StepOneProps) {
  const { cart, add } = useCart();

  const handleChange = (
    type: string,
    ticket: { name: string; value: number; id: string }
  ) => {
    const exists = cart.ticket.ticket.find(
      (item: { id: string }) => item.id === ticket.id
    );
    const tickets = cart.ticket.ticket.filter(
      (item: { id: string }) => item.id !== ticket.id
    );

    if (type === "increase") {
      const quantity = exists ? exists.quantity + 1 : 1;

      return add(
        {
          slotId: ticketSlots.id,
          ticket: [...tickets, { ...ticket, quantity }],
        },
        "ticket"
      );
    }
    if (type === "decrease" && exists && exists.quantity > 1) {
      const quantity = exists.quantity - 1;
      return add(
        {
          slotId: ticketSlots.id,
          ticket: [...tickets, { ...ticket, quantity }],
        },
        "ticket"
      );
    } else {
      return add({ slotId: ticketSlots.id, ticket: tickets }, "ticket");
    }
  };

  useEffect(() => {}, [ticketSlots]);

  function ticketQuantity(id: string) {
    const ticketExists = cart.ticket.ticket.find(
      (ticket: { id: string }) => ticket.id === id
    );
    // console.log("ticketExists: ", ticketExists);
    return ticketExists ? ticketExists.quantity : 0;
  }
  return (
    <>
      <GlobalTitle title={ticketSlots.name} />
      <Map
        data={ticketSlots.ticket}
        renderItem={({ item }) => (
          <>
            {item.length === 0 ? (
              <></>
            ) : (
              <TicketType>
                <Icon
                  source={require("../../../../../../../assets/Event/Ticket.png")}
                  style={{ width: 40, height: 40 }}
                />
                <VerticalView>
                  <TicketTitle style={{ fontWeight: "bold" }}>
                    {item.name}
                  </TicketTitle>
                  <TicketTitle>
                    {item.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TicketTitle>
                </VerticalView>
                <CounterArea>
                  <IconButton onPress={() => handleChange("decrease", item)}>
                    <Icon
                      source={require("../../../../../../../assets/Event/Minus.png")}
                    />
                  </IconButton>
                  <Counter>
                    <CounterText>{ticketQuantity(item.id)}</CounterText>
                  </Counter>
                  <IconButton onPress={() => handleChange("increase", item)}>
                    <Icon
                      source={require("../../../../../../../assets/Event/Plus.png")}
                    />
                  </IconButton>
                </CounterArea>
              </TicketType>
            )}
          </>
        )}
      />
    </>
  );
}

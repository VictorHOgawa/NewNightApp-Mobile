import Theme from "../../../../styles/themes";
import { GlobalTitle } from "../../../Global/Title";
import { HorizontalView } from "../../../Global/View/HorizontalView";
import {
  Container,
  Icon,
  InfoButton,
  Locked,
  Map,
  Person,
  PersonView,
} from "./styles";
import { useState } from "react";

export function Matched() {
  const [locked, setLocked] = useState(true);
  return (
    <Container>
      <HorizontalView style={{ alignItems: "center" }}>
        <GlobalTitle
          title="Quem te deu Like"
          background={`${Theme.color.secondary_40}`}
        />
        <InfoButton>
          <Icon name="infocirlce" size={24} />
        </InfoButton>
      </HorizontalView>
      <Map
        horizontal
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={({ item }) => (
          <PersonView>
            <Person
              locked={locked}
              source={require("../../../../../assets/MyMatches/Person.png")}
            />
            {locked ? (
              <Locked
                source={require("../../../../../assets/MyMatches/Locked.png")}
              />
            ) : (
              <></>
            )}
          </PersonView>
        )}
      />
    </Container>
  );
}

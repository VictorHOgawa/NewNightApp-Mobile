import Theme from "../../../../styles/themes";
import { GlobalTitle } from "../../../Global/Title";
import { HorizontalView } from "../../../Global/View/HorizontalView";
import { Container, Icon, InfoButton, Map, Person, PersonView } from "./styles";

export function Crew() {
  return (
    <Container>
      <HorizontalView style={{ alignItems: "center" }}>
        <GlobalTitle
          title="Galera da Night"
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
              source={require("../../../../../assets/MyMatches/Person.png")}
            />
          </PersonView>
        )}
      />
    </Container>
  );
}

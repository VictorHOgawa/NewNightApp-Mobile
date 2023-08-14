import React, { useRef, useState } from "react";
import ActionSheet from "@alessiocancian/react-native-actionsheet";
import { ActivityIndicator, TouchableOpacityProps, View } from "react-native";

import { Icon, Title, Button, Container, LocationIcon } from "./styles";

import Theme from "../../../../styles/themes";
import { getAPI } from "../../../../utils/api";

interface Props extends TouchableOpacityProps {
  selected: any;
}

let citiesName = ["voltar"];
let cities = [{ name: "voltar", state: "", id: "123" }];

export function CityButton({ selected }: Props) {
  const actionSheetCity = useRef<any>();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string[]>([]);
  const [city, setCity] = useState({ name: "Qualquer Cidade", state: "" });
  const [list, setList] = useState<
    { name: string; state: string; id: string }[]
  >([]);

  async function showActionSheetCity() {
    if (citiesName.length == 1) {
      const City = await getAPI("/city");
      for (let key in City.body) {
        const generateCity = {
          name: City.body[key].name,
          id: City.body[key]._id,
          state: City.body[key].state,
        };

        cities.push(generateCity);
        citiesName.push(`${City.body[key].name} - ${City.body[key].state}`);
      }
    }
    setList(cities);
    setName(citiesName);
    actionSheetCity.current.show();
  }

  function handleClear() {
    setCity({ name: "Cidades", state: "" });
    selected({ name: "Cidades", state: "" });
  }

  return (
    <View>
      <Container>
        <Button onPress={showActionSheetCity}>
          {loading === true ? (
            <ActivityIndicator size="large" color={Theme.color.secondary_100} />
          ) : (
            <>
              <LocationIcon name="location-pin" />
              <Title>
                {city.name != "Cidades"
                  ? `${city.name} - ${city.state}`
                  : city.name}
              </Title>
              <Icon name="chevron-down" />
            </>
          )}

          <ActionSheet
            ref={actionSheetCity}
            title={"Escolha uma Cidade "}
            options={name}
            cancelButtonIndex={0}
            onPress={(index: number) => {
              if (index == 0) {
              } else {
                setLoading(false);
                setCity(list[index]);
                selected(list[index]);
              }
            }}
          />
        </Button>
      </Container>
    </View>
  );
}

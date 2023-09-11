import ActionSheet from "@alessiocancian/react-native-actionsheet";
import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacityProps, View } from "react-native";
import { Button, Container, Icon, LocationIcon, Title } from "./styles";

import { getAPI } from "../../../../utils/api";
interface Props extends TouchableOpacityProps {
  selectedCity: any;
  setSelectedCity: any;
}

export function CityButton({ selectedCity, setSelectedCity }: Props) {
  const actionSheetCity = useRef<any>();
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<any>(["Voltar"]);
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<any>();

  async function getCities() {
    const connect = await getAPI("/city");
    if (connect.status === 200) {
      setList(connect.body.city);
      setCities([
        "Voltar",
        ...connect.body.city.map((city: any) => `${city.name} - ${city.state}`),
      ]);
      return setLoading(false);
    }
  }

  useEffect(() => {
    getCities();
  }, []);

  async function showActionSheetCity() {
    actionSheetCity.current.show();
  }

  return (
    <>
      <View>
        <Container>
          <Button onPress={showActionSheetCity}>
            <LocationIcon name="location-pin" />
            <Title>
              {selectedCity.name !== "" && selectedCity.state !== ""
                ? `${selectedCity.name} - ${selectedCity.state}`
                : selectedCity.name}
            </Title>
            <Icon name="chevron-down" />
          </Button>
        </Container>
      </View>

      {loading ? (
        <></>
      ) : (
        <>
          <ActionSheet
            ref={actionSheetCity}
            title={"Escolha uma Cidade "}
            options={cities}
            cancelButtonIndex={0}
            onPress={(index: number) => {
              if (index == 0) {
              } else {
                setLoading(false);
                setSelectedCity(list[index]);
              }
            }}
          />
        </>
      )}
    </>
  );
}

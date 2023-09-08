import ActionSheet from "@alessiocancian/react-native-actionsheet";
import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacityProps, View } from "react-native";
import { Button, Container, Icon, LocationIcon, Title } from "./styles";

import { getAPI } from "../../../../utils/api";
interface Props extends TouchableOpacityProps {
  selected: any;
}

export function CityButton({ selected }: Props) {
  const actionSheetCity = useRef<any>();
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<any>({
    name: "",
    state: "",
  });
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<any>();

  async function getCities() {
    const connect = await getAPI("/city");
    console.log("connect.body: ", connect.body);
    if (connect.status === 200) {
      setList(connect.body);
      return setLoading(false);
    }
  }
  console.log("cities: ", cities);

  useEffect(() => {
    /* Verificar Lógica */
    if (list) {
      getCities();
    }
  }, [list]);

  async function showActionSheetCity() {
    console.log("list: ", list);
    actionSheetCity.current.show();
  }

  return (
    <>
      <View>
        <Container>
          <Button onPress={showActionSheetCity}>
            <LocationIcon name="location-pin" />
            <Title>
              {cities.name !== "" && cities.state !== ""
                ? `${list.name} - ${list.state}`
                : "Cidades"}
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
            options={list}
            cancelButtonIndex={0}
            onPress={(index: number) => {
              if (index == 0) {
              } else {
                setLoading(false);
                setCities(list[index]);
                selected(list[index]);
              }
            }}
          />
        </>
      )}
    </>
  );
}

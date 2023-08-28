import React, { useRef, useState, useEffect } from "react";
import ActionSheet from "@alessiocancian/react-native-actionsheet";
import {
  ActivityIndicator,
  Modal,
  TouchableOpacityProps,
  View,
} from "react-native";

import {
  Icon,
  Title,
  Button,
  Container,
  LocationIcon,
  ModalBody,
  CityRow,
  CityText,
  Map,
} from "./styles";

import Theme from "../../../../styles/themes";
import { getAPI } from "../../../../utils/api";
import { BackButton } from "../../../Global/Back";

interface Props extends TouchableOpacityProps {
  selected: any;
}

export function CityButton({ selected }: Props) {
  const actionSheetCity = useRef<any>();
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<any>();
  const [open, setOpen] = useState(false);
  console.log("cities: ", cities);

  async function getCities() {
    const connect = await getAPI("/city");
    if (connect.status === 200) {
      setCities(connect.body);
      return setLoading(false);
    }
  }

  useEffect(() => {
    getCities();
  }, []);

  // async function showActionSheetCity() {
  //   if (citiesName.length == 1) {
  //     const City = await getAPI("/city");
  //     for (let key in City.body) {
  //       const generateCity = {
  //         name: City.body[key].name,
  //         id: City.body[key]._id,
  //         state: City.body[key].state,
  //       };

  //       cities.push(generateCity);
  //       citiesName.push(`${City.body[key].name} - ${City.body[key].state}`);
  //     }
  //   }
  //   setList(cities);
  //   setName(citiesName);
  //   actionSheetCity.current.show();
  // }

  return (
    <View>
      <Container>
        <Button onPress={() => setOpen(true)}>
          {loading === true ? (
            <ActivityIndicator size="large" color={Theme.color.secondary_100} />
          ) : (
            <>
              <LocationIcon name="location-pin" />
              <Title>
                {/* {city.name != "Cidades"
                  ? `${city.name} - ${city.state}`
                  : city.name} */}
              </Title>
              <Icon name="chevron-down" />
            </>
          )}

          {/* <ActionSheet
            ref={actionSheetCity}
            title={"Escolha uma Cidade "}
            options={cities}
            cancelButtonIndex={0}
            onPress={(index: number) => {
              if (index == 0) {
              } else {
                setLoading(false);
                // setCity(list[index]);
                // selected(list[index]);
              }
            }}
          /> */}
          <Modal
            animationType="slide"
            visible={open}
            onRequestClose={() => setOpen(false)}
          >
            <ModalBody>
              <BackButton onPress={() => setOpen(false)} />
              <Map
                data={cities.city}
                renderItem={({ item }) => (
                  <CityRow>
                    <CityText>
                      {item.name} - {item.state}
                    </CityText>
                  </CityRow>
                )}
              />
            </ModalBody>
          </Modal>
        </Button>
      </Container>
    </View>
  );
}

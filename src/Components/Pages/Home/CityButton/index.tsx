import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacityProps, View } from "react-native";

import { Button, Container, Icon, LocationIcon, Title } from "./styles";

import ActionSheet from "@alessiocancian/react-native-actionsheet";
import { getAPI } from "../../../../utils/api";
interface Props extends TouchableOpacityProps {
  selected: any;
}

export function CityButton({ selected }: Props) {
  const actionSheetCity = useRef<any>();
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<any>();
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<any>();

  async function getCities() {
    // const connect = await getAPI("/city");
    // console.log("list: ", list);
    // if (connect.status === 200) {
    //   setList(connect.body);
    //   return setLoading(false);
    // }
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
              {/* {list.name != "Cidades"
                ? `${list.name} - ${list.state}`
                : list.name} */}
            </Title>
            <Icon name="chevron-down" />
          </Button>
        </Container>
      </View>

      {/* <Modal animationType="slide" transparent={true} visible={open}>
            <ModalBody>
              <BackButton onPress={() => setOpen(false)} />
              <Map
                data={cities.city}
                renderItem={({ item }) => (
                  <>
                    <CityRow>
                      <CityText>
                        {item.name} - {item.state}
                      </CityText>
                    </CityRow>
                  </>
                )}
              />
            </ModalBody>
          </Modal> */}
      {loading ? (
        <></>
      ) : (
        <>
          <ActionSheet
            ref={actionSheetCity}
            title={"Escolha uma Cidade "}
            options={list}
            cancelButtonIndex={0}
            onPress={(index) => {
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

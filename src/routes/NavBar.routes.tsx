import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { Home } from "../pages/Home";
import Theme from "../styles/themes";
import { Image } from "./styles";

// import { Feed } from "../pages/Home/Feed";
// import { MoonButton } from "../Components/Pages/Home/MoonButton";
// import { Profile } from "../pages/Home/Profile/Profile";
// import { NightMatch } from "../pages/Home/Match";
// import { UserItensSelector } from "../pages/Home/UserItens/Home";
// import { Marketplace } from "../pages/Home/Marketplace";
const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Theme.color.primary_100,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0,
          position: "absolute",
          elevation: 0,
          height: RFValue(60),
          borderTopColor: Theme.color.secondary_100,
          backgroundColor: Theme.color.background,
        },
      }}
    >
      <Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ opacity: focused == true ? 1 : 0.5 }}
              source={require("../../assets/Global/Icons/homeIcon.png")}
            />
          ),
        }}
      />
      <Screen
        name="Marketplace"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ opacity: focused == true ? 1 : 0.5 }}
              source={require("../../assets/Global/Icons/shopIcon.png")}
            />
          ),
        }}
      />
      <Screen
        name="Match"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                opacity: focused == true ? 1 : 0.5,
                width: 60,
                height: 60,
              }}
              source={require("../../assets/Global/Icons/moonIcon.png")}
            />
          ),
        }}
      />
      <Screen
        name="Itens"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ opacity: focused == true ? 1 : 0.5 }}
              source={require("../../assets/Global/Icons/ticketIcon.png")}
            />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ opacity: focused == true ? 1 : 0.5 }}
              source={require("../../assets/Global/Icons/profileIcon.png")}
            />
          ),
        }}
      />
    </Navigator>
  );
}

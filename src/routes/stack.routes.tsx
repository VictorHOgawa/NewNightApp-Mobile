import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../pages/Home";
import { AppRoutes } from "./NavBar.routes";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Event } from "../pages/Event";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          flex: 1,
          backgroundColor: `transparent`,
        },
      }}
    >
      <Screen name="Home" component={AppRoutes} />
      <Screen name="Event" component={Event} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}

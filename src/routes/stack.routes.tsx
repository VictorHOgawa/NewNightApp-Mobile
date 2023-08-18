import { createStackNavigator } from "@react-navigation/stack";

import { Event } from "../pages/Event";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Checkout } from "../pages/checkout";
import { Purchased } from "../pages/purchased";
import { AppRoutes } from "./NavBar.routes";

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
      <Screen name="Checkout" component={Checkout} />
      <Screen name="Login" component={Login} />
      <Screen name="Event" component={Event} />
      <Screen name="Register" component={Register} />
      <Screen name="Purchased" component={Purchased} />
    </Navigator>
  );
}

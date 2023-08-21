import { createStackNavigator } from "@react-navigation/stack";

import { Checkout } from "../pages/Checkout";
import { Event } from "../pages/Event";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Purchased } from "../pages/Purchased";
import { Register } from "../pages/Register";
import { Shop } from "../pages/Shop";
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
      <Screen name="Shop" component={Shop} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}

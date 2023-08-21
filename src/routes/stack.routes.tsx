import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "./NavBar.routes";
import { Checkout } from "../pages/Checkout";
import { Login } from "../pages/Login";
import { Event } from "../pages/Event";
import { Register } from "../pages/Register";
import { Purchased } from "../pages/Purchased";
import { Shop } from "../pages/Shop";
import { Profile } from "../pages/Profile";
import { Tickets } from "../pages/Tickets";
import { Products } from "../pages/Products";
import { Place } from "../pages/Place";

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
      <Screen name="Profile" component={Profile} />
      <Screen name="Place" component={Place} />
      <Screen name="Tickets" component={Tickets} />
      <Screen name="Checkout" component={Checkout} />
      <Screen name="Login" component={Login} />
      <Screen name="Event" component={Event} />
      <Screen name="Register" component={Register} />
      <Screen name="Purchased" component={Purchased} />
      <Screen name="Shop" component={Shop} />
      <Screen name="Products" component={Products} />
    </Navigator>
  );
}

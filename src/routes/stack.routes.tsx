import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "../pages/Chat";
import { Checkout } from "../pages/Checkout";
import { Event } from "../pages/Event";
import { JobDetails } from "../pages/JobDetails";
import { Jobs } from "../pages/Jobs";
import { Login } from "../pages/Login";
import { MatchRegister } from "../pages/MatchRegister";
import { MyMatches } from "../pages/MyMatches";
import { Place } from "../pages/Place";
import { Products } from "../pages/Products";
import { Profile } from "../pages/Profile";
import { Purchased } from "../pages/Purchased";
import { Register } from "../pages/Register";
import { Shop } from "../pages/Shop";
import { Tickets } from "../pages/Tickets";
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
      <Screen name="MatchRegister" component={MatchRegister} />
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
      <Screen name="MyMatches" component={MyMatches} />
      <Screen name="Chat" component={Chat} />
      <Screen name="Jobs" component={Jobs} />
      <Screen name="JobDetails" component={JobDetails} />
    </Navigator>
  );
}
